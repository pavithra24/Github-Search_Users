#simple dockerfile for deploying a static HTML site with Docker and Nginx
FROM nginx:alpine
COPY web-service /usr/share/nginx/html/
EXPOSE 80
