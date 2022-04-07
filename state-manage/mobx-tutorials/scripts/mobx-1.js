const { observable, autorun, runInAction } = require("mobx");

// observable : state.
// autorun : observable가 만들어지거나, 변화시 callback excute
// runInAction : if change state action, High order function.
//  - 일련의 액션들을 묶어서 하나의 액션으로 처리함.

const state = observable({
  name: "dodo",
  age: 21,
});
const state2 = observable({
  name: "sky",
  age: 40,
});

autorun(() => {
  console.log("something is changed state1", state.name, state.age);
});

autorun(() => {
  console.log("something is changed state 1 or 2", state.name, state2.name);
});

autorun(() => {
  console.log("something is changed state2", state2.age, state2.name);
});

runInAction(() => {
  state.name = "updated";
  state.age = 100;
});

runInAction(() => {
  state2.name = "updated";
  state2.age = 200;
});

/*
something is changed state1 dodo 21
something is changed state 1 or 2 dodo sky
something is changed state2 40 sky
---
something is changed state1 updated 100
something is changed state 1 or 2 updated sky
---
omething is changed state 1 or 2 updated updated
something is changed state2 200 updated

*/
