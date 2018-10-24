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

<<<<<<< HEAD
## How do I run it?
=======
>>>>>>> master

##### Download the app
```
$ git clone git@github.com:LazySamir/googley-eyes.git
$ cd googley-eyes
```
#### Add extension to chrome from the repository
Visit: chrome://extensions/
Click 'Load unpacked'
Navigate to and select the 'googley-eyes/app' directory

#### Add the extension to chrome from chrome store
Visit: https://chrome.google.com/webstore/detail/googley-eyes/pmmhkfmjlmfafdbmncichafmcchedefb

Click 'Add to Chrome'


### How do I use it?
Click Extension Icon to open a new googley-eyes analytics page

[Image of extension icon]
[Image of example analytics page]

Open a new browser tab to see your recent history.

[Image of example new tab page]


### How do I run the tests?

To run the unit tests you will need Node.js installed on your local machine. After cloning the project run `npm install` to make sure all dependencies are also installed.

The unit tests are run using Node-based Jasmine, to run them call `npm test`.

The coverage of the unit tests will be shown in the console after running the tests (coverage is provided by the `Istanbul` package).


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

## Approach

To start, we split into two teams, one to figure out and set up testing frameworks suitable for chrome extensions
and the other working out a suitable way to access browser details required for the extensions features.

#### Testing:

1. A node-based version of Jasmine was set up to manage unit tests. This allows us to run all tests from our node environment.

2. Travis(CI), Instanbul(Code Coverage) and Eslint(Linter) were set up and configured to ensure consistently high code quality.

3. We decided to use an automated web browser for feature testing (Selenium). Configuration of Selenium was difficult and took longer than expected to resolve. Most resources available for Selenium chrome driver were not applicable in Javascript. A third person was added to the testing team to resolve this blocker. We resolved the configuration issues first in Java (just to get it working). Later we used webdriver.io that had preconfigured the selenium server that allowed us to continue in Javascript.

#### The spike:

1. Initially we researched how to access the history stored on a chrome browser as we believed this would fit our needs.
After some investigation we realised that although this would allow us access to user sites visited, we would be
unable to accurately determine user time spent on each site. i.e. if a user did not click on a link once on a site, it would record the duration as 0.

2. To resolve this issue, we decided to use the chrome extension to record site visits and duration and store these via the google.storage API. This would then be retrieved from storage and presented on the extensions main page.
- We decided to store and present sites visited before attempting to record user site duration.
- We first added dummy text to the app homepage (accessed by clicking the extension icon) to ensure we had an chrome
extension skeleton to build upon.

3. All code for these spikes were deleted. All code was rebuilt using TDD processes.
