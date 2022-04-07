const { observable, autorun, runInAction } = require("mobx");

class OrderLine {
  @observable price = 0;
  @observable amount = 1;
}
