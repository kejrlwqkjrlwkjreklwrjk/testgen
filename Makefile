default:
	cd cmd/asd-server && make dev

ui:
	cd front-end && npm start


init:
	go mod tidy && make

everything:
	cd cmd/asd-server && make everything