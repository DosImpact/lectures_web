# Redux Concepts

```
yarn add redux react-redux
yarn add immer
yarn add redux-devtools-extension redux-logger redux-thunk redux-saga


```

- [ ] redux & react-redux

  - [ ] connect HOC 함수

- [ ] DuckPattern & combineReducer

  - [ ] Pratice-todoApp

- [ ] middleWares

  - [ ] redux-devtools-extension
  - [ ] redux-thunk
  - [ ] redux-saga

## Redux

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

## 미들웨어

액션 리듀스 작업 외 추가 작업들은 미들웨가 책임진다.

    특정 조건에 따라 액션이 무시되게

    액션을 콘솔에 출력하거나, 서버쪽에 로깅

    액션이 디스패치 됐을 때 이를 수정해서 리듀서에게 전달

    특정 액션이 발생했을 때 이에 기반하여 다른 액션이 발생

    특정 액션이 발생했을 때 특정 자바스크립트 함수를 실행

```

```

### redux-devtools-extension

리덕스 상태를 개발자 도구로 관찰하기 위함

```js
//yarn add redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension"; // 리덕스 개발자 도구

const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 만듭니다.
```

### redux-thunk

디스패치를 뭉텅이를 가지는 async 함수를 처리하도록 디스패치를 만듦

### redux-saga

redux-thunk 외 작업 처리

    비동기 작업을 할 때 기존 요청을 취소 처리
    특정 액션이 발생했을 때 이에 따라 다른 액션이 디스패치되게끔 하거나, 자바스크립트 코드를 실행
    웹소켓을 사용하는 경우 Channel 이라는 기능을 사용하여 더욱 효율적으로 코드를 관리  (참고)
    API 요청이 실패했을 때 재요청하는 작업
