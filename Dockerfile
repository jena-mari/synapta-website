# Stage 1: Build
FROM node:18-alpine as build
WORKDIR /app

# Copy package files
COPY package*.json ./

# 1. Clean install
# 2. Force install the specific Linux binary needed for Alpine/Railway
RUN npm ci && npm install @rollup/rollup-linux-x64-musl

COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]