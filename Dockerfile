# Use the official Node.js image as a base image
FROM node:18 AS builder

# Set the working directory
WORKDIR /Brar_DhaniRam_final_site

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application for production
RUN npm run build

# Install a lightweight web server
RUN npm install -g serve

# Expose port 5575 to the outside world
EXPOSE 5575

# Start the application
CMD ["serve", "-s", "build", "-l", "5575"]
