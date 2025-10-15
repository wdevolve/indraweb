@echo off
echo Normalizing image extensions...

REM Convert .jpeg to .jpg
powershell -Command "Get-ChildItem -Recurse -Path .\public\images\ -Include *.jpeg | Rename-Item -NewName { $_.Name -replace '\.jpeg$', '.jpg' }"

REM Convert .JPG to .jpg
powershell -Command "Get-ChildItem -Recurse -Path .\public\images\ -Include *.JPG | Rename-Item -NewName { $_.Name -replace '\.JPG$', '.jpg' }"

REM Convert .PNG to .png
powershell -Command "Get-ChildItem -Recurse -Path .\public\images\ -Include *.PNG | Rename-Item -NewName { $_.Name -replace '\.PNG$', '.png' }"

echo Done.
pause
