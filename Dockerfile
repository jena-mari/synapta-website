# --- Stage 1: Build Stage ---
FROM node:20-alpine AS build
WORKDIR /app

# 1. Install dependencies (separated to use Docker cache)
COPY package*.json ./
RUN npm install

# 2. Copy the rest of your code
COPY . .

# 3. Build the project (This creates the /app/dist folder)
RUN npm run build

# 4. Debug check (Optional: verify dist exists during build)
RUN ls -la /app/dist


# --- Stage 2: Runtime Stage ---
FROM nginx:stable-alpine

# 1. Copy your custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 2. Copy the build output from the "build" stage to Nginx
# Note: This MUST come after Stage 1 finishes the build
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]