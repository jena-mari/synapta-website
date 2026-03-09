# STAGE 1: Build
# Upgrade to Node 20 to satisfy @tailwindcss/oxide requirements
FROM node:20-alpine AS build
WORKDIR /app

# Only copy package.json (still no lockfile to ensure a clean install)
COPY package.json ./

# Install dependencies. We REMOVE the forced x64-musl command 
# so npm detects if you are on ARM64 (Apple Silicon) or x64 (Intel).
RUN npm install

# Copy the rest of the source code
COPY . .

# Run the production build
RUN npm run build

# STAGE 2: Serve
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from Stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# Ensure your nginx.conf is in the same folder
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]