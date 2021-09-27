FROM ubuntu:20.04

ADD server.js /

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs \
    npm 
run npm install ip \
    express

EXPOSE 80

CMD node ./server.js
