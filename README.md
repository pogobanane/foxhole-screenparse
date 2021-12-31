# foxhole-screenparse
https://pogobanane.de/foxhole-screenparse/

Foxhole-screenparse parses contents of stockpiles into machine-readable lists which can be used in spreadsheets for logistics planning. 
It uses a naive image processing approach using openCVs template matching and tesseract for OCR/text recognition. 
Both of those libraries run directly in your browser using wasm and thelike. 

# Comparison

|                                | screenparse           | [Stockpiler](https://github.com/tehruttiger/Stockpiler)   |
|--------------------------------|-----------------------|----------------------|
| platform                       | browser based         | windows app          |
| Seaports/Storage Depots        | yes                   | yes                  |
| Bunker Bases etc.              | no                    | yes                  |
| Supports different resolutions | 1080p - 4k            | manual work required |
| imaging tech                   | openCV, tesseract OCR | openCV               |
| language                       | js                    | py                   |

# Build / Deploy

The webpage has no backend, so just shove the files into some webroot or so.

# Conribute

This project can use some work on the front-end. The frontend could be set up with proper compilation steps (react).

While the output table is built to be exported into spreadsheets, the relevant spreadsheet functionality could directly be built into the website.

## Extracting icons from mods

- extract .pak 
  - with github.com/panzi/u4pak or
  - `cd C:...\UE_4.20\Engine\Binaries\Win64`; `UnrealPak.exe C:\Steam\steamapps\common\Foxhole\War\Content\Paks\War-WindowsNoEditor.pak -Extract [DESTINATION FOLDER]`
- extract .png from .uasset with [UEViewer](https://www.gildor.org/en/projects/umodel) ([src](https://www.github.com/gildor2/UEViewer)]
