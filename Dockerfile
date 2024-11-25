# Use an official Node runtime as the base image
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install serve for hosting static files
RUN npm install -g serve

# Copy built assets from previous stage
COPY --from=build /app/dist ./dist

# Expose port (Cloud Run will dynamically assign)
EXPOSE 8080

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "8080"]