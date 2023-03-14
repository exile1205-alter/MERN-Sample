# Getting Started with Express and Docker
This is a sample express project from [express-generator](https://www.npmjs.com/package/express-generator), and customize to print Node.js version on Express homepage.

In this class, you would learn 
1. How to build a docker image
2. How to run up a docker container
3. How to change your image environment with dockerfile

# Prerequisites
Before you start to work with this sample, Docker has to be installed and all dependencies be provided as described in the following sections.

### Install Docker
Check the official [Docker documentation](https://docs.docker.com/) for information how to install Docker on your operating system. And then install Docker and supporting tools.

### Install Node.js
Check the official [Node.js](https://nodejs.org/en/) for information how to install Node.js on your operating system. And then install Node.js and supporting tools.

If you are using Ubuntu, you can use the following command:
    
    sudo apt install nodejs
    node -v or node –version // check node version
    sudo apt install npm 
    npm -v or npm –version // check npm version


# Getting Started

### Running Express Web with local node environment

1. Run the following command to install express dependencies
    
    ```bash
    npm install
    ```

    If you have npm / node not found error, please check with your node.js / npm install status.


2. Run the following command to startup express application

    ```bash
    npm start
    ```

3. Open [http://localhost:3000](http://localhost:3000) and take a look around. The page would be similar to the following.

    <html><body><h1>Express</h1><p>Welcome to Express</p><p>Node.js version: v18.12.1</p></body></html>

    The Node.js version would be as same as your node version on your computer.

    ```bash
    node -v
    //result
    v18.12.1
    ```

### Using Docker to build up a node 16 environment

1. Run the following command to build a docker image with node16:slim

    ```bash
    docker build --tag node-docker .
    ```

    Wait for building an image...

    ```bash
    Sending build context to Docker daemon  6.868MB
    Step 1/7 : FROM node:16-slim
    16-slim: Pulling from library/node
    8fd419aca81c: Pull complete 
    19524cdfef7d: Pull complete 
    2ca6c8cc8d3e: Pull complete 
    af519de7a852: Pull complete 
    97569810b0c3: Pull complete 
    ...
    ```

    docker build would build an image with your dockerfile

2. Run the following command to run a docker container with the image

    ```bash
    docker run -p 3000:3000 node-docker
    ```
    Wait for your container ready

    ```bash
    > Express-Sample@0.0.0 start
    > node ./bin/www
    ```
3. Open [http://localhost:3000](http://localhost:3000) and take a look around. The page would be similar to the following.

    <html><body><h1>Express</h1><p>Welcome to Express</p><p>Node.js version: v16.19.1</p></body></html>

### Using Docker to build up a node 14 environment

1. Modify Dockerfile, change the 'FROM node:16-slim' to 'FROM node:14-slim'

    ```bash
    # Pull the Node image from Docker Hub
    FROM node:14-slim
    #FROM node:16-slim
    ...
    ```

2. Run the following command to build a docker image with node14:slim
    
    ```bash
    docker build --tag node-docker-2 .
    ```

    Wait for building an image...

    ```bash
    Sending build context to Docker daemon   6.87MB
    Step 1/7 : FROM node:14-slim
    14-slim: Pulling from library/node
    8fd419aca81c: Already exists 
    19524cdfef7d: Already exists 
    5820433f15c9: Pull complete 
    3cfa41563a7d: Pull complete 
    b1abc24bbcf3: Pull complete 
    ...
    ```

    docker build would build an image with your dockerfile

3. Run the following command to run a docker container with the image

    ```bash
    docker run -p 3010:3000 node-docker-2
    ```
    Wait for your container ready

    ```bash
    > Express-Sample@0.0.0 start
    > node ./bin/www
    ```

4. Open [http://localhost:3010](http://localhost:3010) and take a look around. The page would be similar to the following.

    <html><body><h1>Express</h1><p>Welcome to Express</p><p>Node.js version: v14.21.3</p></body></html>