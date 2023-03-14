# Getting Started with MERN Stack
This is a sample MERN Stack project with docker-compose

In this class, you would learn 
1. How to use docker-compose to build up multiple images
2. How to use docker-compose to run up multiple containers
3. Understand some docker-compose elements

# Prerequisites
Before you start to work with this sample, Docker has to be installed and all dependencies be provided as described in the following sections.

### Install Docker
Check the official [Docker documentation](https://docs.docker.com/) for information how to install Docker on your operating system. And then install Docker and supporting tools.

### Install Node.js
Check the official [Node.js](https://nodejs.org/en/) for information how to install Node.js on your operating system. And then install Node.js and supporting tools.

### Install Docker-Compose
#### Windows and macOS
Docker Compose is included in Docker Desktop for Windows and macOS.

#### Linux
Check the official [Docker Compose Github](https://github.com/docker/compose) for information how to install Docker Compose on your operating system.

Verify whether Docker Compose has been install successfully

```bash
docker-compose -v
```
The output would be similar to the following.

```bash
docker-compose version 1.25.0, build unknown
```

# Getting Started

### Using docker-compose to build up your docker images

1. Run the following command to build up your MERN stack images

```bash
docker-compose build
```

Wait for building an image...

```bash
mongo uses an image, skipping
mongo-express uses an image, skipping
Building express-server
Step 1/7 : FROM node:14-slim
 ---> 14090ac0e55e
...
```

2. Run the following command to check your MERN stack images

```bash
docker images
```
The output would be similar to the following.
```bash
REPOSITORY                          TAG       IMAGE ID       CREATED         SIZE
2mern_stack_sample_react-client     latest    7a3eb70a4ff7   2 minutes ago   487MB
2mern_stack_sample_express-server   latest    ed04ecfc7781   5 minutes ago   206MB
```

### Using docker-compose to run up your containers

1. Run the following command to run up your MERN containers

```bash
docker-compose up
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

2. Open [http://localhost:3000](http://localhost:3000) and take a look around. 
