
# ############################################################
# DO NOT CHANGE THIS FILE.
#

name = task-1

build:
	docker build . -t $(name)

run:
	docker run --detach --rm --name $(name) --publish 8000:80 $(name)

get:
	wget -O - -q http://localhost:8000/

stop:
	docker container stop $(name)

.PHONY: build run get stop
