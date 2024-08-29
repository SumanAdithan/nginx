# Nginx Setup Guide

## Installation

Run the following commands to install Nginx:

    sudo apt update
    sudo apt install nginx

it create nginx directory in: /etc/nginx
Visit http://YOUR_IP or http://127.0.0.1 in your browser. You should see Welcome to nginx.

## Location

-   **Root Location for Default Page:**

    -   Default location: /var/www/html

    -   For multiple domains, use virtual hosts.

-   **Create a Folder and HTML File:**
    -   Create a directory: /var/www/sample
    -   Add an HTML file to this directory.

## Virtual Host Configuration

1.  **Create a Virtual Host Configuration File:**

    ```bash
    sudo nano /etc/nginx/sites-available/sample
    ```

2.  **Add the Following Configuration:**

        ```
        server {
            # Listen on port 81 for both IPv4 and IPv6 connections
            listen 81;
            listen [::]:81;

            # Define the server name; replace 'YOUR_IP' with your server's IP address or domain name
            server_name YOUR_IP;

            # Set the root directory where the server will look for files
            root /var/www/sample;

            # Define the default index file
            index index.html;

            # Location block for handling requests to the root URL
            location / {
                # Try to serve the requested file or directory; if not found, return a 404 error
                try_files $uri $uri/ =404;
            }

        }

3.  **Add symbolic link:**
    ```bash
    sudo ln -s /etc/nginx/sites-available/sample /etc/nginx/sites-enabled/
    ```

## Test the Configuration

1. **Restart or Reload Nginx:**

    ```bash
    sudo service nginx restart
    ```

    or

    ```bash
    sudo systemctl reload nginx
    ```

    or

    ```bash
    sudo systemctl restart nginx
    ```

2. **Open the URL:**
   Visit http://YOUR_IP:81 or http://127.0.0.1:81 in your browser. You should see the content of index.html.

## Test Nginx Configuration

To test your Nginx configuration for syntax errors, use:

```
sudo nginx -t
```

## Display the Effective Nginx Configuration

To display the complete and effective configuration as interpreted by Nginx, use:

```
sudo nginx -T
```

## Check Error Logs

To view error logs, use:

    sudo tail -f /var/log/nginx/error.log

## Nginx Terminology

#### Directives

Nginx is configured using directives, which are key-value pairs that determine the behavior of the server. Directives can control various settings, such as the number of worker processes or the root directory for files.

Example:

```
worker_processes 1;
```

#### Contexts

Contexts are blocks that group related directives together. They help organize the Nginx configuration and define the scope in which certain directives apply.

Example:

```
events {
    worker_connections 1024;
}
```

## Test Nginx Configuration

To test your Nginx configuration for syntax errors, use:

```
sudo nginx -t
```

## Display the Effective Nginx Configuration

To display the complete and effective configuration as interpreted by Nginx, use:

```
sudo nginx -T
```

## Location Context

The location context is used to define how specific requests should be handled within a server block. Different location blocks can be used to serve different parts of a website or apply specific configurations to certain paths.

Example:

```
server {
    listen 81;
    listen [::]:81;

    server_name YOUR_IP;

    root /var/www/oibsib;
    index index.html;

    # Task 1 - Standard root usage
    location /task-1 {
        try_files $uri $uri/ =404;
    }

    # Task 2 - Using alias to map task-2 to task-3 directory
    location /task-2 {
        alias /var/www/oibsib/task-3/;
        try_files $uri $uri/ =404;
    }

    # Task 3 - Standard root usage with specific file handling
    location /task-3 {
        try_files /task-3/index.js /task-3/index.html =404;
    }

    # Catch-all location for root directory
    location / {
        try_files $uri $uri/ =404;
    }
}
```

## Redirects and Rewrites

Redirects and rewrites are used in Nginx to alter the requested URL path, either by redirecting the client to a different URL or by internally rewriting the request to a different path.

Example:

```
server {
    listen 81;
    listen [::]:81;
        Replace YOUR_IP with your server's IP address.

    server_name YOUR_IP;

    root /var/www/oibsib;
    index index.html;

    # Rewrite /number/... to /count/...
    rewrite ^/number/(\w+) /count/$1 last;

    # Match /count/ followed by a single digit and use root for task-3
    location ~* ^/count/[0-9]$ {
        root /var/www/oibsib/task-3;
        try_files $uri $uri/ /index.html =404;
    }

    # Redirect /abc to /task-1
    location /abc {
        return 307 /task-1;
    }

    # Catch-all location for root directory
    location / {
        try_files $uri $uri/ =404;
    }
}
```

## Load Balancing

Load balancing is a technique used to distribute incoming network traffic across multiple servers to ensure no single server is overwhelmed. Nginx supports several load balancing algorithms, and one of the most common is the round-robin algorithm.

#### Round-Robin Algorithm

The round-robin algorithm distributes requests evenly across all servers in the upstream group. This is the default method for load balancing in Nginx.

Example:

```
upstream backendserver {
    server 127.0.0.1:1111;
    server 127.0.0.1:2222;
    server 127.0.0.1:3333;
    server 127.0.0.1:4444;
}

server {
    listen 81;
    listen [::]:81;

    server_name YOUR_IP;

    root /var/www/oibsib;
    index index.html;

    # Task 1 - Standard root usage
    location /task-1 {
        try_files $uri $uri/ =404;
    }

    # Task 2 - Using alias to map task-2 to task-3 directory
    location /task-2 {
        alias /var/www/oibsib/task-3/;
        try_files $uri $uri/ =404;
    }

    # Task 3 - Standard root usage with specific file handling
    location /task-3 {
        try_files /task-3/index.js /task-3/index.html =404;
    }

    # Rewrite /number/... to /count/...
    rewrite ^/number/(\w+) /count/$1 last;

    # Match /count/ followed by a single digit and use root for task-3
    location ~* ^/count/[0-9]$ {
        root /var/www/oibsib/task-3;
        try_files $uri $uri/ /index.html =404;
    }

    # Redirect /abc to /task-1
    location /abc {
        return 307 /task-1;
    }

    # Proxy requests to the backend server group
    location / {
        proxy_pass http://backendserver/;
    }
}
```
