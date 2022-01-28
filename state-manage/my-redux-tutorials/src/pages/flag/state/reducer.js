import { FLAG_DOWN, FLAG_UP } from "./actions";

const flagReducer = (
  state = { isFlagUp: false, lastedUpdate: null },
  action
) => {
  switch (action.type) {
    case FLAG_UP:
      return {
        isFlagUp: true,
        lastedUpdate: new Date().toTimeString(),
      };
    case FLAG_DOWN:
      return {
        isFlagUp: false,
        lastedUpdate: new Date().toTimeString(),
      };
    default:
      return state;
  }
};

export default flagReducer;
