# STAGE 1: Build
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files
COPY package*.json ./

# Force the correct native bindings for Alpine/Railway
RUN npm install --platform=linuxmusl && npm install @rollup/rollup-linux-x64-musl

COPY . .
RUN npm run build

# STAGE 2: Serve
FROM nginx:alpine
# Fixing the syntax: 'COPY' and 'AS' now match 'FROM'
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]