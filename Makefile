debug:
	docker run -v $(pwd):/usr/share/nginx/html:ro -p 8080:80 nginx

install:
	sudo cp -r ./ /var/www/html/foxhole-screenparse/

appsscript:
		awk '1;/<!-- insert js blob here -->/{exit}' apps-script/index.html > apps-script/packed.html
		cat image.js >> apps-script/packed.html
		cat items.js >> apps-script/packed.html
		cat itemcounter.js >> apps-script/packed.html
		cat icons.js >> apps-script/packed.html
		cat ocr.js >> apps-script/packed.html
		cat apps-script/main.js >> apps-script/packed.html
		awk 'x==1 {print $1} /<!-- insert js blob here -->/ {x=1}' apps-script/index.html >> apps-script/packed.html
		cd apps-script && clasp push
