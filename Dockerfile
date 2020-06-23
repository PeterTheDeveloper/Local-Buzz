FROM node:14.4.0
# code executes in the command line INSIDE the docker container
RUN mkdir -p /usr/app/

WORKDIR /usr/app

COPY ./Client ./Client/
COPY ./Server ./Server/

RUN npm install
RUN npm build 

CMD ['npm', 'start'] start'