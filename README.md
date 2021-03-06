# Team Profile Generator

## Introduction

![main screenshot](./assets/images/screen1.png)

Programmatically generate profiles for all of your employees! This project was built so that users can quickly and easily produce a high-quality, single-page web application that displays a team profile in a simple format. It also served as an excellent introduction to Node.js and several of its packages (including inquirer and fs). Presently, I consider this an MVP build, and plan to introduce additional features and improvements in the future including better code modularization and more detailed employee profiles. I will likely also make improvements to the application's fairly minimalist UI.

## Table of Contents

[Introduction](#introduction)  
[Dependencies](#dependencies)  
[Installation](#Installation)  
[Usage](#usage)  
[Contributing](#contributing)

## Prerequisites

This application requires Node.js to function. Download the installer here: https://nodejs.org/en/download/. Following installation, run "npm i" from a command prompt to install the required dependencies.

## Usage

Team Profile Generator accepts user input using the Node.js Inquirer package and injects it into an HTML template to output a single web page. Users are presented with the option to include a single manager and an unlimited quantity of engineers/interns. Run the application from the project's root directory and provide a valid name, email and ID when prompted. Additionally, the user is required to supply a valid office number for managers, GitHub repository for engineers and School for Interns. When the user refrains from adding further employees, the application will generate an HTML file containing the user's input within the 'dist' directory.

For a demonstration of the applpication's functionality, see the video in the link below;

https://watch.screencastify.com/v/36X9NwB4fwpAlqOg98jD

## Contributing

Feel free to fork/leave suggestions in the slack channel.

## Questions

Feel free to shoot me any questions at the email below:

rrich.kray@gmail.com

find my GitHub profile by following the link below:

https://github.com/rrich-kray/
