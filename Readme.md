# Learning ReactJS

This is my learning project for ReactJS. If someone gets benefit from it, that would be my pleasure.

Thanks.

``` bash
# Install globally
npm install -g typescript typings webpack

# Install project dependencies
npm install

# Link globally installed typescript instead of in a local folder
npm link typescript

# Install typings
typings install --global --save dt~react
typings install --global --save dt~react-dom

# Bundle
webpack

# Run a webserver
static -p 8000 -a 0.0.0.0 # Node-Static server
# python -m SimpleHTTPServer -- 2.x < Python < 3.x 
# python -m http.server -- Python > 3.x
```

The base folder structure and setup has been taken from official website of [Typescript](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html).

```
Copyright 2016 Arnab Das <arnab@coderuse.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```