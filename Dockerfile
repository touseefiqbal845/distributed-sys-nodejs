# Use official Node.js image
FROM node:20

# Install MongoDB shell and nodemon
RUN apt-get update && apt-get install -y wget gnupg && \
    wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | apt-key add - && \
    echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/6.0 main" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list && \
    apt-get update && apt-get install -y mongodb-mongosh && \
    npm install -g nodemon

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all app files
COPY . .

# Expose app port
EXPOSE 5001

# Start app with nodemon for live-reload
CMD ["npm", "run", "dev"]
