
# PFE Licence: Algeria Cybersecurity Web Application

![Logo](/Source/static/img/Header.svg)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Contact us](#contact-us)

## Introduction
The Cybersecurity Web Application is a platform that enables individuals, businesses, and government departments to report cyber issues and incidents. The application offers a user-friendly interface for submitting reports, reporting Indicators of Compromise (IOCs) and scanning websites for open ports.

## Features
- User Roles: The application provides different user roles, such as individual, business, and government, each with specific privileges and access levels.

- Incident Reporting: Users can submit detailed cyber incident reports, providing essential information about the security issue they have encountered.

- Indicator of Compromise (IOC) Reporting: The application allows users to report IOCs, aiding in the identification and mitigation of potential threats.

- Website Scanning: Users can perform website scans using Nmap to identify open ports and potential security vulnerabilities.

- Secure Database: The application utilizes MySQL for data storage, ensuring the safe and reliable handling of sensitive information.

## Technologies Used
- Frontend: HTML, CSS, JavaScript, jQuery, Adobe Illustrator, Canva

- Backend: Flask (Python)

- Database: MySQL

- Additional Tools: Nmap 


## Getting Started
To get a local copy of the project up and running on your machine, follow these steps:

- Clone the repository: 
```git
git clone https://github.com/Khalil_hamidani/PFE.git
```
- Navigate to the project directory: 
```bash
cd PFE
```
- Install the required dependencies: 
```bash
pip install -r requirements.txt
```
- Install also the required nmap package by following the installation instructions [here](https://geekflare.com/nmap-vulnerability-scan/)
- Setup the MySQL database with the provided schema in [DataBase.sql](/Source/database/DataBase.sql) where you will find the sql commands to create the tables, make sure to setup a proper database connection on your server or local machine and edit the config on the flask rout :
```python
# database connection
app.config['MYSQL_HOST'] = '172.27.145.170' # your server IP
app.config['MYSQL_USER'] = 'root'  # your username
app.config['MYSQL_password'] = '' # your password
app.config['MYSQL_DB'] = 'IOC'  # your database name
mySQL = MySQL(app)
```
Run the application:
```bash
./comands.sh
```
Access the application in your web browser at http://localhost:5000.


## Contributing
We welcome contributions to improve the application. To contribute, follow these steps:

- Fork the repository.
- Create your feature branch: git checkout -b feature/YourFeature
- Commit your changes: git commit -m 'Add some feature'
- Push to the branch: git push origin feature/YourFeature
- Submit a pull request.


## Contact us

This project was created by: 
- [khalil hamidani](https://github.com/Khalil-hamidani)
- [Chaïma Feddane](https://github.com/Feddane)

feel free to contact us.
