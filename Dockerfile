# Use an official node image as the base image
FROM node:18

# Set the working directory
WORKDIR /client

# Copy package.json and package-lock.json/yarn.lock
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
