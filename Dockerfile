# Stage 1: Build
FROM node:18-alpine as build
WORKDIR /app

# Copy package files
COPY package*.json ./

# 1. Clean slate: Delete any local lockfile that might have been copied
# 2. Install: This will generate a fresh lockfile specifically for Linux Alpine
RUN rm -rf node_modules package-lock.json && npm install

COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# Stage 2: Serve
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Railway and Nginx standard port
EXPOSE 80

# CRUCIAL: This keeps the container running in the foreground
CMD ["nginx", "-g", "daemon off;"]