# -------- STAGE 1: Build with Node & Webpack --------
    FROM node:20 AS builder

    # Set working directory inside the container
    WORKDIR /app
    
    # Copy package files and install dependencies
    COPY package.json package-lock.json* ./ 
    RUN npm install
    
    # Copy the rest of the app source
    COPY . .
    
    # Build the app with Webpack (adjust if you use a custom script)
    RUN npm run build
    
# -------- STAGE 2: Serve with Nginx --------
    FROM nginx:alpine
    
    # Remove default Nginx static content
    RUN rm -rf /usr/share/nginx/html/*
    
    # Copy built files from the previous stage
    COPY --from=builder /app/dist /usr/share/nginx/html
    
    # Expose web port
    EXPOSE 80
    