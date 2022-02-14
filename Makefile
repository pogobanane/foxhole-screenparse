debug:
	docker run -v $(shell pwd):/usr/share/nginx/html:ro -p 8080:80 nginx

install:
	sudo cp -r ./ /var/www/html/foxhole-screenparse/

appsscript:
		mkdir -p apps-script/build
		cp apps-script/appsscript.json apps-script/build/
		cp apps-script/fh-screenparse-sidebar.gs apps-script/build/
		# generate packed.html
		awk '1;/<!-- insert js blob here -->/{exit}' apps-script/index.html > apps-script/build/packed.html
		cat image.js >> apps-script/build/packed.html
		cat items.js >> apps-script/build/packed.html
		cat itemcounter.js >> apps-script/build/packed.html
		cat icons.js >> apps-script/build/packed.html
		cat ocr.js >> apps-script/build/packed.html
		cat apps-script/main.js >> apps-script/build/packed.html
		awk 'x==1 {print $1} /<!-- insert js blob here -->/ {x=1}' apps-script/index.html >> apps-script/build/packed.html
		# push to google
		cd apps-script/build && clasp push
