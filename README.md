# Googley Eyes

[![Build Status](https://travis-ci.org/LazySamir/googley-eyes.svg?branch=master)](https://travis-ci.org/LazySamir/googley-eyes)

Googley Eyes is a chrome extension that monitors your browser activity and presents you with metrics of website usage.

## Created By
- [Rashika Patel](https://github.com/cbp10)
- [Aneel Marshall](https://github.com/marshall159)
- [Andrew Gibbs](https://github.com/SecretSurfSpot)
- [David Lawes](https://github.com/DaveLawes)
- [Samir Soormally](https://github.com/LazySamir)

[![Waffle.io - Columns and their card count](https://badge.waffle.io/LazySamir/googley-eyes.svg?columns=all)](https://waffle.io/LazySamir/googley-eyes)

## How do I run it?


##### Download the app
```
$ git clone git@github.com:LazySamir/googley-eyes.git
$ cd googley-eyes
```


### How do I run the tests?

To run the unit tests you will need Node.js installed on your local machine. After cloning the project run `npm install` to make sure all dependencies are also installed.

The unit tests are run using Node-based Jasmine, to run them call `npm test`.

The coverage of the unit tests will be shown in the console after running the tests (coverage is provided by the `Istanbul` package).

### How do I use it?



## User Stories

```
As a Google Chrome user,
So that I can manage my time,
I want to be able to see what sites I have visited and how long I've spend on each one

As a Google Chrome user,
So that I can know my browser history is safe,
I want any data collected to be stored locally
```

## Domain Model

```    
Browser                             
╔═══════════════════════╗     
║ Chrome                ║     
║ ╔═════════════════╗   ║
║ ║                 ║   ║
║ ║ localStorage    ║   ║
║ ║ Chrome app      ║   ║
║ ║                 ║   ║
║ ╚═════════════════╝   ║
║       |               ║
║       | API           ║
║       |               ║
║       |               ║
║ ╔═════════════════╗   ║
║ ║                 ║   ║
║ ║ googley eyes    ║   ║
║ ║ .crx            ║   ║
║ ║                 ║   ║
║ ╚═════════════════╝   ║
║         |             ║      
╚═══════════════════════╝  
          |
          |  
          |           .json
          |      ╔════════════╗
          |      ║            ║  Read first    
          |------║  manifest  ║  Includes the scripts that need to be run
                 ║            ║  Tells Chrome how to run our extension
                 ╚════════════╝ 
                       |
                       |    
                       |            
                       |   
                 ╔════════════╗  
                 ║            ║  Defines scripts to run in the background
                 ║ background ║  Defines event listeners  
                 ║            ║  Writes to localStorage
                 ╚════════════╝  
                       |
                       |    
                       |  (create new tab on button click)         
                       |   
                 ╔════════════╗  
                 ║            ║  Single page view
                 ║   index    ║  Show web activity  
                 ║    html    ║  Includes js scripts to run
                 ╚════════════╝ 
                       |
                       |               ╔════════════╗
                       |               ║            ║  Reads from localStorage
                       |---------------║   index    ║  Manipulates data and injects into the view
                                       ║    js      ║
                                       ╚════════════╝
                 		
```