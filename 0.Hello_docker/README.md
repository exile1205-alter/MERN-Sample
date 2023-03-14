# Getting Started with Docker
Hello-world from docker

In this class, you would learn 
1. How to quickly check up docker installation status
2. How to run up a docker container

# Prerequisites
Before you start to work with this sample, Docker has to be installed and all dependencies be provided as described in the following sections.

### Install Docker
Check the official [Docker documentation](https://docs.docker.com/) for information how to install Docker on your operating system. And then install Docker and supporting tools.

# Getting Started

### Running Hello-world inside a Docker container

Run the following command to run a Docker container with  'Hello-world' docker image

    % docker run hello-world

### Result

Check your terminal output and the result would be similar to the following.

    Unable to find image 'hello-world:latest' locally
    latest: Pulling from library/hello-world
    2db29710123e: Pull complete 
    Digest: sha256:63421b18c1443a9a85139225293fae7541fb40b7832d9deff80b6a9a75ce3604
    Status: Downloaded newer image for hello-world:latest

    Hello from Docker!
    This message shows that your installation appears to be working correctly.

    To generate this message, Docker took the following steps:
    1. The Docker client contacted the Docker daemon.
    2. The Docker daemon pulled the "hello-world" image from the Docker Hub. (amd64)
    3. The Docker daemon created a new container from that image which runs the executable that produces the output you are currently reading.
    4. The Docker daemon streamed that output to the Docker client, which sent it to your terminal.

    To try something more ambitious, you can run an Ubuntu container with:
    $ docker run -it ubuntu bash

    Share images, automate workflows, and more with a free Docker ID:
    https://hub.docker.com/

    For more examples and ideas, visit:
    https://docs.docker.com/get-started/


The output indicates that your Docker installation is working properly. If you want to learn more about Docker, you can refer to the [Get Started](https://www.docker.com/get-started/) section from Docker official, which contains detailed instructions and explanations.