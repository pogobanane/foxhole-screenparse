debug:
	docker run -v $(pwd):/usr/share/nginx/html:ro -p 8080:80 nginx

install:
	sudo cp -r ./ /var/www/html/foxhole-screenparse/
