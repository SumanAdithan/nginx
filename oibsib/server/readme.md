## Express Server Docker Setup

### Dockerfile

The provided Dockerfile configures the Docker image for the Express server. Here is the file with added comments:

```
# Use the official Node.js image from the Docker Hub
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application's dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 7777 to the outside world
EXPOSE 7777

# Define the command to run the application
CMD [ "npm", "start" ]
```

### Explanation:

-   `FROM node:16`: Specifies the base image to use, which is Node.js version 16. This image includes Node.js and npm.
-   `WORKDIR /usr/src/app`: Sets the working directory inside the container where commands will be run.
-   `COPY package*.json ./`: Copies the package.json and package-lock.json files to the working directory.
-   `RUN npm install`: Installs the application dependencies listed in package.json.
-   `COPY . .`: Copies the rest of the application code to the working directory.
-   `EXPOSE 7777`: Exposes port 7777 for communication between the container and the outside world.
-   `CMD [ "npm", "start" ]`: Specifies the default command to run when the container starts, which is npm start to launch the Express server.

### Building the Docker Image

```
docker build -t myserver .
```

-   `-t` myserver: Tags the built image with the name myserver.
-   `.`: Specifies the build context (current directory).

### Running Docker Containers

Run multiple instances of the Docker container, each mapping a different host port to the container’s port 7777:

```
docker run -p 1111:7777 -d myserver
docker run -p 2222:7777 -d myserver
docker run -p 3333:7777 -d myserver
docker run -p 4444:7777 -d myserver
```

-   `-p <host_port>:7777`: Maps the specified host port to port 7777 inside the container.
-   `-d`: Runs the container in detached mode, allowing it to run in the background.
-   `myserver`: Specifies the image to use for the container.

### Troubleshooting

-   Check Container Logs:  
    View the logs for any issues or errors:

```
docker logs <container_id>
```

Replace `<container_id>` with the actual container ID or name.

-   Validate Docker Image:  
    Ensure that the Docker image is built correctly:

```
docker images
```

Check if myserver is listed.
