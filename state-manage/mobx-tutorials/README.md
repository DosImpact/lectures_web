
## ref

https://github.com/RiyaNegi/react-webpack 

## 1. webpack - react setting

목적 : setting jsx env   

```
npm init -y
yarn add react react-dom 
yarn add -D webpack webpack-cli webpack-dev-server
yarn add -D html-webpack-plugin mini-css-extract-plugin
yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader file-loader css-loader style-loader

```

```js
/.babelrc
{
  "presets": ["@babel/preset-env", "@bable/preset-react"]
}
```

```js
/.webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    hot: true,
    // open: true, // browser auto open
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000",
    //     pathRewrite: { "^/api": "" },
    //   },
    // },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new MiniCssExtractPlugin(),
  ],
};
```

```js
/src
.
├── App.js
├── index.html
└── index.js


import React from "react";

function App() {
  return (
    <div>
      <h1>Welcome to React App</h1>
      <h3>Date : {new Date().toDateString()}</h3>
    </div>
  );
}

export default App;



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));


```

## 2. webpack - typescript react setting

- typescript  
  - allowJS
  - paths settings


- javascript - decorators
  - babel settings

```
yarn add -D @babel/plugin-proposal-decorators

./babel.config.json 
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}

// *- 플러그인의 순서가 중요하다.
```

## 3. ts.config - IDE Settings


```
	- IDE 단에서, javascript 루트 프로젝트로 알아먹기 위함, 
	- 실제 Javascript 변환은 babel 이 담당한다.
	- 코드를 작성하는 도중의 도움을 주는 IDE는 jsconfig.json 을 기준으로 알려줌
	( eg) 데코레이터 - 원래 없는 기능이므로 오류발생 -> jsconfig 설정 )
	- tsconfig.json 으로 사용해도 된다. ( allowJs : true  의 자손 파일 이므로, ) 
		○ *tsc 변환 과정 + IDE 도움 두개를 같이 가져 가자.


tsc --init
    "allowJs": true,    
    "experimentalDecorators": true,  
```

# mobx

## mobx install

```
yarn add mobx mobx-react
yarn add -D @babel/plugin-proposal-decorators
```

## mobx concepts. 


state : 객체    
-  observable 감싸기.  

action : 객체 변화  

observer  
- observable 로 객체가 변하면 이를 안다.  

MobX 도 원래 웹을 위해서 나온 상태관리 도구는 아니다.  
- 공식문서에는 내용이 많지만, 전부 사용하지는 않는다.  

Mobx의 대표 함수들  

- 변화 감지 대상을 고르고  
- 변화를 시키는 함수를 만들고   
- 변화시 호출할 함수를 등록하고 끝.  

```
// observable : 변화를 감지할 객체를 감싸는 HOF

// runInAction : 액션(상태변화)를 단위로 묶어서 실행,
//  - 일련의 액션들을 묶어서 하나의 액션으로 처리함.
// action : runInAction은 바로 실행되지만, 액션은 나중에 호출 시 실행되도록 함.

// autorun :  observable 객체의 생성시 -> 콜백호출
//            observable 객체의 변화 감지 -> 콜백호출
// reaction : observable 객체의 프로퍼티 변화 감지 -> 콜백호출
```

웹 브라우저에서, 클래스를 막 찍어내야 하는 상황이 생길까?    
- 클래스들이 싱글톤처럼 더 다루어 지지 않는가?  


