# Stage 1: Build
FROM node:18-alpine as build
WORKDIR /app

# Copy package files
COPY package*.json ./

# CRUCIAL: Delete any local lockfile and node_modules that might have been copied
# Then install fresh, architecture-specific binaries for Linux Alpine
RUN rm -rf node_modules package-lock.json && npm install

COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]