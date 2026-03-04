# Stage 1: Build the React application
FROM node:20-alpine AS build
WORKDIR /app

# Stage 2: Runtime
FROM nginx:stable-alpine

# Copy the custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

