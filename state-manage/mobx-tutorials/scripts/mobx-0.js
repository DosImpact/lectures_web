const { observable, autorun, runInAction } = require("mobx");

// observable : state.
// autorun : observable가 만들어지거나, 변화시 callback excute
// runInAction : if change state action, High order function.

const state = observable({
  name: "dodo",
  age: 21,
});

autorun(() => {
  console.log("something is changed 1", state.name, state.age);
});

runInAction(() => {
  state.name = "updated";
  state.age = 100;
});

runInAction(() => {
  state.name = "updated";
  state.age = 200;
});
