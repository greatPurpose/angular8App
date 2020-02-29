FROM node:11.4.0-alpine as builder

WORKDIR /app

# Copy app dependencies.
COPY package.json package-lock.json /app/

# Install app dependencies.
RUN npm install

# Copy app files.
COPY . /app/

# Default build configuration.
ARG configuration=production

# Build app
RUN npm run build -- --output-path=./dist/out --configuration=$configuration

FROM nginx:1.15.7-alpine

RUN rm -rf /usr/share/nginx/html/*
# Compress
RUN echo $'gzip on; \n\
gzip_proxied any; \n\
gzip_types text/plain text/xml text/css application/x-javascript; \n\
gzip_vary on; \n\
gzip_disable "MSIE [1-6]\.(?!.*SV1)";' > /etc/nginx/conf.d/gzip.conf
# Config for SAP app
RUN echo $'server { \n\
   listen       80; \n\
   server_name  localhost; \n\
   location / { \n\
       root   /usr/share/nginx/html; \n\
       index  index.html index.htm; \n\
       try_files $uri $uri/ /index.html; \n\
   } \n\
   error_page   500 502 503 504  /50x.html; \n\
   location = /50x.html { \n\
       root   /usr/share/nginx/html; \n\
   } \n\
}' > /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
