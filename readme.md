# htmlCssEditor

This repo contains a HTML and CSS code editor for Wakanda based on ACE editor.

## Install

Clone this repository in your `Wakanda/Extensions` folder:

```shell
git clone https://github.com/Wakanda/cloud-ide-extension-htmlCssEditor.git htmlCssEditor
```

## How to build

The application is built from sources using webpack.

1. Install [Node.js](https://nodejs.org/en/)

2. To install dependencies run in the command line inside the root folder of the project

    ````
    npm install
    ````
    A first build will be run after the installation of all the dependencies.
    
    NOTE: Some npm plugins may need [node-gyp](https://www.npmjs.com/package/node-gyp) and its dependencies to be installed. You can find more details [here](https://github.com/nodejs/node-gyp#installation).
    
    NOTE for windows users: Because of npm's way of nesting node_modules folders the path becomes longer than the max acceptable on Windows, the solution is to map your local folder to a drive letter:  
	- To map the current directory to a free drive letter S subst s: .\
	- To remove the mapping subst s: /D

3. To build the application run in the command line inside the root folder of the project
	````
	npm run webpack-build-prod
	````
	This command will produce a minified&uglified pack of the application in the `build` folder.

Other commands available are:

````
npm run webpack-watch
````
Create a watcher process that compile diffs live

````
npm run webpack-build
````
Create a not-minified not-uglified version of the build

````
npm run test
````
Run karma unit testing


## How to contribute

Follow the standard github workflow and send pull requests on `develop` branch.
Every pull request should include:

- 1 or more commit for the modifications
- 1 final commit with only the production build version of the application

Bump to next version will be done by the team.



## License 

*The MIT License*

Copyright (c) 2015 WAKANDA S.A.S.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.