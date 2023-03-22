# Getting Started with Typescript
This is a sample typescript project with a calculator CLI

In this class, you would learn 
1. How to build a typescript code
2. Typescript class, interface and method

# Prerequisites
Before you start to work with this sample, Docker has to be installed and all dependencies be provided as described in the following sections.

### Install Node.js
Check the official [Node.js](https://nodejs.org/en/) for information how to install Node.js on your operating system. And then install Node.js and supporting tools.

If you are using Ubuntu, you can use the following command:
    
    sudo apt install nodejs
    node -v or node –version // check node version
    sudo apt install npm 
    npm -v or npm –version // check npm version

### Install tsc
If you already with npm, you can install tsc, the TypeScript compiler with the following command:

    npm install typescript -g


# Getting Started


1. Run the following command to install dependencies
    
    ```bash
    npm install
    ```

    If you have npm / node not found error, please check with your node.js / npm install status.


2. Run the following command to build typescript, 

    ```bash
    tsc
    ```

    Because we already write a tsconfig.json, it would use the config to compile typescript.
    If you have tsc not found error, please check with your tsc install status.


3. Enjoy with your command line tool with the following commands

    ```bash
    node dist/index.js --operation {operator} {x} {y}
    ```
