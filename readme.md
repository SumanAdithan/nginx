# Nginx Setup Guide

## Installation

Run the following commands to install Nginx:

    ```bash
    sudo apt update
    sudo apt install nginx
    ```

## Location

-   **Root Location for Default Page:**

    -   Default location: /var/www/html
    -   For multiple domains, use virtual hosts.

-   **Create a Folder and HTML File:**
    -   Create a directory: /var/www/sample-directory
    -   Add an HTML file to this directory.

## Virtual Host Configuration

1. **Create a Virtual Host Configuration File:**

    ```bash
    sudo nano /etc/nginx/sites-available/sample
    ```

2. **Add the Following Configuration:**

    ```
    server {
        listen 81;
        listen [::]:81;

        server_name YOUR_IP;

        root /var/www/sample-directory;
        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }
    }
    ```

    Replace YOUR_IP with your server's IP address.

3. **Add symbolic link:**
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

2. **Open the URL:**
   Visit http://YOUR_IP:81 in your browser. You should see the content of index.html.

## Check Error Logs

To view error logs, use:

    ```bash
    sudo tail -f /var/log/nginx/error.log
    ```
