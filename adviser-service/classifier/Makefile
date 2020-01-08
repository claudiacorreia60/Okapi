all: del build

build:
	docker build -t adviser-img . 
	docker rm adviser-container
	docker run -d --name adviser-container -p 8000:3335 adviser-img	

delete:
	docker rm adviser-container
	docker image prune -a 