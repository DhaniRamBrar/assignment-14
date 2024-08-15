# Dockerized React Application

This project contains a Dockerfile to create a container hosting a production build of the Create React App for the portfolio site. The container will run the web application at `localhost:5575`.

## Requirements

- Docker installed on your machine.

## Build and Run the Docker Container

Follow these steps to build and run the Docker container:

1. Build the Docker image:

   Run the following command in the terminal from the root of your project directory where the Dockerfile is located:

   docker build -t brar_dhaniram_coding_assignment14 .
   
run: 
docker run -p 5575:5575 --name brar_dhaniram_coding_assignment14 brar_dhaniram_coding_assignment14
#   a s s i g n m e n t - 1 4  
 