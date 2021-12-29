# foxhole-screenparse
https://pogobanane.de/foxhole-screenparse/

Foxhole-screenparse parses contents of stockpiles into machine-readable lists which can be used in spreadsheets for logistics planning. 
It uses a naive image processing approach using openCVs template matching and tesseract for OCR/text recognition. 
Both of those libraries run directly in your browser using wasm and thelike. 

# Build / Deploy

The webpage has no backend, so just shove the files into some webroot or so.

# Conribute

This project desperately needs some work on the design/front-end. 
One option would be to integrate it into the react app [foxhole-globalhq](https://github.com/illmaren/FHGHQ).
