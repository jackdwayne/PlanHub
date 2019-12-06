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
    # Get current directory
    original_dir = os.getcwd()
    # Get ./Planhub_App
    react_start = str(original_dir) + "/Planhub_App"
    # Get ./Planhub_App/src/backend
    mongo_start = react_start + "/src/backend"
    # Run mongodb
    os.chdir(mongo_start)
    sp.Popen(["nodemon", "server.js"])
    # Run React App
    os.chdir(react_start)
    react = sp.run(["npm", "start"]) 
    exit()
