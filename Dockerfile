# Use the official lightweight Nginx image
FROM nginx:alpine

# Remove default HTML files from Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy everything from your src folder to Nginx's web root
# COPY src/ /usr/share/nginx/html/
COPY src/template.html /usr/share/nginx/html/index.html


# Expose port 80 for web traffic
EXPOSE 80
