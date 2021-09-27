# eea.docker.containerip

Micro nodejs application to print the ip of the container, thing crazy.

Used for debugging containers, orchestrator and mitigate related headaches.

docker run -it --rm -e APPPORT=81 -p 8081:81 eeacms.containerip 
