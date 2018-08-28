## Boilerplate for an absolute minimum setup of a React project with only webpack

The purpose is to avoid the huge and exhaustive set-up with [create-react-app](https://github.com/facebook/create-react-app) for quick and dirty testing of some basic feature or prototype without any extra complexities.

## To launch in local machine

```
npm install
npm run dist

```

The command ``npm run dist`` will create a fresh new file in dist/bundle.js and this file is being referred to in the src/index.html file.

Then open ``open src/index.html`` in a browser


### Possible warning - If I get the below after running ``webpack``

```js
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/

```

Solution - [https://webpack.js.org/concepts/mode/](https://webpack.js.org/concepts/mode/)

pass it as a CLI argument:

### webpack --mode=production
