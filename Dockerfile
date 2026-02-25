# Step 1: Build Stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files first to cache dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the project
RUN npm run build

# Step 2: Runtime Stage
FROM nginx:stable-alpine
# Copy the build output from Vite (dist folder) to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]