#!/usr/bin/env python3
################################################################################
# Script that will run the PlanHub app.
# It may ask the user to confirm allow the react webpage to open on a second
# webhost
################################################################################
import subprocess as sp
import os
import signal

print("This script will open the PlanHub website")
x = input("Do you want to open the website? [Y/y for yes]: ")
if x.lower() == 'y':
    original_dir = os.getcwd()
    react_start = str(original_dir) + "/Planhub_App"
    mongo_start = react_start + "/src/backend"
    os.chdir(mongo_start)
    sp.Popen(["nodemon", "server.js"])
    os.chdir(react_start)
    react = sp.run(["npm", "start"]) 
    exit()
