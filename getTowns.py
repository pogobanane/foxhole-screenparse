#!/bin/python3
import subprocess
import json

maps = subprocess.check_output(['curl', 'https://war-service-live.foxholeservices.com/api/worldconquest/maps'])
maps = json.loads(maps)
out = ""
count = 0
for map in maps:
    apidata = subprocess.check_output(['curl', f'https://war-service-live.foxholeservices.com/api/worldconquest/maps/{map}/static'])
    apidata = json.loads(apidata)
    # print(apidata, flush=True)
    for mapTextItem in apidata['mapTextItems']:
        out += mapTextItem['text'] + '\n'
        count += 1

print(out)
print(count)
