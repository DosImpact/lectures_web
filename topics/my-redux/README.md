# Redux Tutorials

@Index

- [ ] Redux Concepts

  - [ ] install
  - [ ] Redux 구성
    - [ ] 3대 규칙

- [ ] redux & react-redux

  - [ ] Settings(DuckPattern & combineReducer)
  - [ ] connect HOC 함수

- [ ] middleWares

  - [ ] myLogger.js
  - [ ] redux-devtools-extension
  - [ ] redux-thunk
  - [ ] redux-saga
  - [ ] react-router-redux

---

# Redux Concepts

## install

```
yarn add redux react-redux
yarn add immer
yarn add redux-devtools-extension redux-logger redux-thunk redux-saga

yarn add react-router-dom react-router-redux
```

## Redux 구성

Action

    객체
    {type:String,payload:Object}

Action Creator

    액션(객체)을 만드는 함수

Reducer

    상태를 변화 시키는 함수
    인자로 상태,액션 받아서 액션에 맞는 상태로 변환

Store

    리듀서 + 현재의 앱 상태

    dispatch
        스토어의 내장함수, 액션을 발생시키는 것

    subscribe
        스토어의 내장함수, 액션 디스패치시 구독함수 호출

### 3대 규칙

1. 하나의 app에는 하나의 스토어가 존재
2. 상태는 읽기 전용(불변성 유지)
3. 리듀서는 순수함수, 비수순수 로직은 미들웨어로 실행할 것

# redux & react-redux

## Settings(DuckPattern & combineReducer)

```

Pages /
  AppName /
    state           # 특정 페이지 단위별로 상태관리를 하고자 함 (DuckPattern)
      actions.js    # 액션,액션크리에이터 정의
      reducer.js    # 리듀서 정의
      sage.js       # 사가
      selectors.js  # 리설렉터


```

```js
//store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "../Pages/Couter/state/reducer";
import todoReducer from "../Pages/Todo/state/reducer";

import reduxLogger from "redux-logger";
import myLogger from "./middlewares/my-logger";

/* rootReducer , middleWares  */
const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(myLogger, reduxLogger))
);

// index.js - Provider
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

### useSelector

useSelector는 스토어의 상태를 가져와 구독하고 있다.
useSelector의 인자는 함수이고, 이 함수가 리턴하는 값이 같다면 리랜더링은 방지된다.  
아래의 코드처럼 매번 새로운 객체를 리턴하게 된다면, 무조건 리랜더링 되는 코드다.

```js
// 문제의 코드 --> 최적화가 필요함
const { number, diff } = useSelector((state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
}));

// 개선 -1
const number = useSelector((state) => state.counter.number);
const diff = useSelector((state) => state.counter.diff);
// 개선 -2
const { number, diff } = useSelector(
  (state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }),
  shallowEqual
);
```

# middleWares

액션 리듀스 작업 외 추가 작업들은 미들웨가 책임진다.

    특정 조건에 따라 액션이 무시되게

    액션을 콘솔에 출력하거나, 서버쪽에 로깅

    액션이 디스패치 됐을 때 이를 수정해서 리듀서에게 전달

    특정 액션이 발생했을 때 이에 기반하여 다른 액션이 발생

    특정 액션이 발생했을 때 특정 자바스크립트 함수를 실행

## myLogger.js

```js
const myLogger = (store) => (next) => (action) => {
  console.log("-->myLogger action", action);
  const result = next(action);
  console.log("-->myLogger result", result);
  return result;
};

export default myLogger;
```

## redux-devtools-extension

리덕스 상태를 개발자 도구로 관찰하기 위함

```js
//yarn add redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension"; // 리덕스 개발자 도구

const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 만듭니다.
```

## redux-thunk

기존의 액션은 객체지만, **thunk미들웨어를 사용하여, 비동기함수 타입의 액션을 처리**하도록 한다.  
thunk는 비동기 함수를 리턴하는 액션 크리에이터 함수다.

예를들어, 데이터를 가져오는 액션(비동기 함수)을 dispatch 하면  
하나의 비동기 함수가 처리되는 동안 -> Loading,Success,Error 등의 액션(객체)을 묶어서 처리할 수 있다.

커스텀 미들웨어(로거) 에서 봤듯이, 미들웨어는 store,next,action 의 맥락을 가졌다.  
thunk 미들웨어에서는 store.dispatch 와 store.getState 를 외부로 위임하고  
next에 대한 책임을 진다.

그래서 thunk 는 ( 비동기 함수 액션 크리에이터) dispatch,getState 인자로 받는 함수가 된다.

```js
import ReduxThunk from "redux-thunk";

const rootMiddleWares = [
  //myLogger,
  reduxLogger,
  ReduxThunk,
];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...rootMiddleWares))
);

export default store;
```

thunk 미들웨어를 사용하므로, thunk 함수 안에서 - 액션 객체,함수 모두 dispatch를 날릴 수 있다.
thunk 로 서버State 동기화를 위해 유틸함수를 만들어 보자.

- GET_POST, GET_POST_SUCCESS, GET_POST_ERROR 을 GET_POST 의 하위 액션들로 보는 관점
- 리듀서에서 하위 리듀서 함수를 만들어 위임하는것이 가능

## redux-saga

redux-thunk 외 작업 처리

    비동기 작업을 할 때 기존 요청을 취소 처리
    특정 액션이 발생했을 때 이에 따라 다른 액션이 디스패치되게끔 하거나, 자바스크립트 코드를 실행
    웹소켓을 사용하는 경우 Channel 이라는 기능을 사용하여 더욱 효율적으로 코드를 관리  (참고)
    API 요청이 실패했을 때 재요청하는 작업
