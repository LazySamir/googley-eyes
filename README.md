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
#### Add extension to chrome from this repository
Visit: chrome://extensions/
Click 'Load unpacked'
Navigate to and select the 'googley-eyes/app' directory

#### You can also add the extension to chrome from chrome store
Visit: https://chrome.google.com/webstore/detail/googley-eyes/pmmhkfmjlmfafdbmncichafmcchedefb

Click 'Add to Chrome'


### How do I use it?

Open a new browser tab to see your recent history, the current time and date and the amount of time you have spent online today:
![Imgur](https://i.imgur.com/Cj7qmvH.png)

Click Extension Icon to open a new googley-eyes analytics page:

![Imgur](https://i.imgur.com/8yQrdcz.png)
Googley Eyes extension icon

The following page will show you the amount of time today you have spent on different domains. This is done so descriptively in a table and graphically via a pie chart. Click a segment of the chart to animate it.
![Imgur](https://i.imgur.com/Tk3fUBR.png)

### How do I run the tests?

To run the unit tests you will need Node.js installed on your local machine. After cloning the project run `$ npm install` to make sure all dependencies are also installed. Feature testing is compatible with Java8.

To install Java 8 with homebrew:
1. `$ brew cask uninstall java`
2. `$ brew tap caskroom/versions`
3. `$ brew cask install java8`.

The unit tests are run using Node-based Jasmine, to run them call `$ npm test`.

The feature tests are run in conjunction with Selenium WebdriverIO simulates user activity by automating web browsing. Run feature tests by calling `$ npm run test-features`


The coverage of the unit tests will be shown in the console after running the tests (coverage is provided by the `Istanbul` package).


## User Stories

```
As a Google Chrome user,
So that I can manage my time,
I want to be able to see what sites I have visited and how long I've spend on each one

As a Google Chrome user,
So I know where I've spent every second of my active time online,
I would like to see a table showing my time online

As a Google Chrome user,
So I can quickly and easily see where my time has been spent,
I would like to see a graphical representation of my time spent on domains

As a Google Chrome user,
So I am reminded to be productive today,
I would like to be taken to a Googley Eyes overview page when I create a new tab

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
