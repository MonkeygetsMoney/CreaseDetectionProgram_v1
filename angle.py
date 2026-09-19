#this would test whether the program currently run can detect multiple lines on a paper
#At the same time, test whether it can filter out unwanted lines

import cv2
import math
import numpy as np

def nothing(x):
    pass

def getangle():
    expected_angle = [90]
    return expected_angle

def getcreaseline(img, threshold):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (3,3), 1)
    edges = cv2.Canny(blur, 60, 60)
    lines = cv2.HoughLines(edges, 1, np.pi/180, threshold)
    lines_coord = cv2.HoughLinesP(edges, 1, np.pi/180, threshold)

    return lines_coord, lines

def resultlines(img, threshold):
    _, lines = getcreaseline(img, threshold)
    if lines is None:
        return None

    expected_angle = getangle()
    resultangles = []

    for i in range(len(expected_angle)):
        candidates = [] 
        #put inside the for loop so it can be refresh everytime new angle is added

        for line in lines:
            rho,theta = line[0]
            line_angle = (math.degrees(theta) + 90) % 180
            diff = min(abs(line_angle - expected_angle[i]), 180 - abs(line_angle - expected_angle[i]))
            if diff < 0.9:
                candidates.append((rho, line_angle))
                
            if not candidates:
                return None
                #if none found, return None

        candidates.sort(key = lambda c: abs(c[1] - expected_angle[i]))
        #this sort the values in candidates list from closest to farthest compare to the expectedangle value

    for candidate in candidates:                 
        resultangles.append((candidate))
            
    return resultangles

def matches(current, reference, angletol = 10, rhotol = 100):
    if current is None or reference is None:
        return False

    numberofangles = len(getangle())

    for i in range(len(current)):
        crho, cangle = current[i]
        rrho, rangle = reference[i]

        anglediff = min(abs(cangle - rangle), 180 - abs(cangle - rangle))
        rhodiff = abs(crho - rrho)

        if anglediff < angletol and rhodiff < rhotol:
            if i == len(current) - 1:
                return True
            else:
                continue
        else:
            return False

def linedrawn(current, k = 5000):

    point1 = []
    point2 = []

    for i in range(len(current)):
        rho, angle = current[i]
        theta = math.radians((angle - 90) % 180)
        dhat = np.array([[np.cos(theta)], [np.sin(theta)]])
        d = rho * dhat
        lhat = np.array([[-np.sin(theta)], [np.cos(theta)]])
        p1 = d + k*lhat
        p2 = d - k*lhat
        p1 = p1.astype(int)
        p2 = p2.astype(int)

        point1.append((p1))
        point2.append((p2))

    return point1, point2

def getframe(x = 760, y = 360, w = 480, h = 480):
    roi = frame[y:y+h, x:x+w]
    threshold = cv2.getTrackbarPos('threshold', 'empty')

    return roi, threshold

def refframe():
    roi = cv2.imread('media/reference.jpg', 1)
    #read the image then past into cvtcolor

    threshold = cv2.getTrackbarPos('threshold', 'empty')
    result = resultlines(roi, threshold)

    if result is not None:
        return result
    else:
        return None

camera = cv2.VideoCapture(0)
x, y, w, h = 750, 350, 500, 500
linex = x+w/2
liney = y+h/2

counter = 1
    #for the saved images

none = np.zeros((250, 500, 3), np.uint8)
    #window with black background

cv2.namedWindow('empty', cv2.WINDOW_NORMAL)
cv2.resizeWindow('empty', 200, 200)
cv2.createTrackbar('threshold', 'empty', 56, 200, nothing)

cv2.namedWindow('Live Feed', cv2.WINDOW_NORMAL)
cv2.resizeWindow('Live Feed', 600, 600)

while(True):
        ret, frame = camera.read()
        if not ret:
            break
        
        display = frame.copy()
        #cv2.rectangle(display, (x, y), (x+w, y+h), (0, 255, 0), 2)
        #draw rectangle for the capture zone

        cv2.line(display, (int(linex-100), int(liney)), (int(linex+100), int(liney)), (255, 255, 255), 5)
        cv2.line(display, (int(linex), int(liney-100)), (int(linex), int(liney+100)), (255, 255, 255), 5)
        
        cv2.imshow('Live Feed', display)
        cv2.imshow('empty', none)

        key = cv2.waitKey(1)

        if key == ord('c'):
            roi, threshold = getframe()
            filename = f'picture1.jpg'
            saved = f'media/{filename}'
            cv2.imwrite(saved, roi)
            file = 'media/picture1.jpg'
            read = cv2.imread(file)
            result = resultlines(read, 56)
            cart_coor, hough_coor = getcreaseline(read, 56)

            if result is not None:
                ccrease = result
                length = len(ccrease)
                rcrease = refframe()
                #print(f'This is before filter: hough is {hough_coor} and cartesian is {cart_coor}')
                #print(f'The number of lines are {len(hough_coor)} and {len(cart_coor)}')
                print(f'This after filter: line are {ccrease} and length is {length}')

                #draw the lines
                point1, point2 = linedrawn(ccrease)
                for i in range(len(ccrease)):
                    x1, y1 = point1[i][0][0], point1[i][1][0]
                    x2, y2 = point2[i][0][0], point2[i][1][0]
                    print(f'The coordinates are {x1, y1, x2, y2}')
                    line = cv2.line(roi, (x1, y1), (x2, y2), (255, 255, 255), 1)

            cv2.imshow(f'Lines on paper', roi)
        
            #cv2.imshow(f'paper1', roi)
                #counter += 1
        if key == ord('q'):
            break

camera.release()
cv2.destroyAllWindows()