#!/usr/bin/env python

import cgi
import sys
import os

print "Content-type: text/html\n\n"

#Stop all currently running programms
reset = "pkill -9 -f LED.py"
os.system(reset)


action = "one_color"
speed = "0.0"
step = "1"
delay = "0.0"
reverse = "0"

color1 = sys.argv[1]
color2 = "00ff00"
color3 = "00ff00"
color4 = "00ff00"
color5 = "00ff00"
color6 = "00ff00"


cmd = "python LED.py " + action + " " + speed + " " + step + " " + delay + " " + reverse + " " + color1 + " " + color2 + " " + color3 + " " + color4 + " " + color5 + " " + color6 + "< /dev/null > /dev/null 2>&1 &"
# cmd = "python LED.py " + action + " " + speed + " " + step + " " + delay + " " + reverse + " " + color1 + "< /dev/null > /dev/null 2>&1 &"
os.system(cmd)
print cmd
