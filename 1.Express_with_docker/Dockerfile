# Pull the Node image from Docker Hub
#FROM node:14-slim
FROM node:16-slim

# Set directory
WORKDIR /usr/app

# Copy package.json
COPY ./package.json ./

# Install Express dependencies
RUN npm install

# Copy rest of the code to container
COPY . .

# Expose 3000 port
EXPOSE 3000

# Run the Express application
CMD [ "npm", "start" ]