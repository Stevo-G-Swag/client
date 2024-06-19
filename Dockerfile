# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /client

# Copy the current directory contents into the container at /client
COPY . /client

# Install any needed packages specified in package.json
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV NAME EnviroTutorClient

# Run npm start when the container launches
CMD ["npm", "start"]