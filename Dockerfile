#simple dockerfile for deploying a static HTML site with Docker and Nginx
FROM nginx:alpine
COPY app.js index.html /usr/share/nginx/html/
EXPOSE 80
