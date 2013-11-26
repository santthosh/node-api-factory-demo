# node-api-factory-demo [![Build Status](https://secure.travis-ci.org/santthosh/node-api-factory-demo.png?branch=master)](http://travis-ci.org/santthosh/node-api-factory-demo)

node-api-factory demo

## Running the demo

* Check out the demo
`git clone git@github.com:santthosh/node-api-factory-demo.git -b develop`

* Switch the demo directory
`cd node-api-factory-demo`

* Install the dependencies
`npm install`

* Start the server with nodemon using grunt, you should see a similar output
```
node-api-factory-demo santthosh$ grunt
Running "nodemon:dev" (nodemon) task
26 Nov 15:18:56 - [nodemon] v0.7.10
26 Nov 15:18:56 - [nodemon] to restart at any time, enter `rs`
26 Nov 15:18:56 - [nodemon] watching: /Users/santthosh/Desktop/tmp/node-api-factory-demo/api-factory
26 Nov 15:18:56 - [nodemon] watching: /Users/santthosh/Desktop/tmp/node-api-factory-demo/test
26 Nov 15:18:56 - [nodemon] starting `node lib/node-api-factory-demo.js`
26 Nov 15:18:56 - [nodemon] reading ignore list
```

* Go to the browser and play around with api's defined in the folder `api-factory` and configs in `api-factory.json`
Example: http://localhost:8112/api/weather/city/london

* Write proxy files with .proxy, JSON with .json, XML with .xml and any .js file to handle requests in Javascripts

## License
Copyright (c) 2013 Santthosh. Licensed under the MIT license.
