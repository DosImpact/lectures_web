export const FLAG_UP = "FLAG_UP"; // base action
export const FLAG_DOWN = " FLAG_DOWN"; // base action

export const FLAG_UP_ASYNC = "FLAG_UP_ASYNC"; // sage start action
export const FLAG_DOWN_ASYNC = "FLAG_DOWN_ASYNC"; // sage start action

// base actionCreator -
export const flagUp = () => ({ type: FLAG_UP });
export const flagDown = () => ({ type: FLAG_DOWN });

// saga observe actionCreator
export const flagUpAsync = () => ({ type: FLAG_UP_ASYNC });
export const flagDownAsync = () => ({ type: FLAG_DOWN_ASYNC });

// example)
// - 모든 요청을 처리하는 액션 (나중에 처리되면 뒤늦게 상태가 변하는 문제 발생)
// - 모든 요청 중 처음 요청만 처리하는 액션 (쓰로틀링)
// - 모든 요청 중 마지막 요청만 처리하는 액션 (디바운싱)

export const FLAG_UPDOWN_TAKE_EVERY = "FLAG_UPDOWN_TAKE_EVERY";
export const FLAG_UPDOWN_TAKE_FIRST = "FLAG_UPDOWN_TAKE_FIRST";
export const FLAG_UPDOWN_TAKE_LAST = "FLAG_UPDOWN_TAKE_LAST";

export const flagUpDownTakeEvery = ({ isUp }) => ({
  type: FLAG_UPDOWN_TAKE_EVERY,
  payload: { isUp },
});
export const flagUpDownTakeFirst = ({ isUp }) => ({
  type: FLAG_UPDOWN_TAKE_FIRST,
  payload: { isUp },
});
export const flagUpDownTakeLast = ({ isUp }) => ({
  type: FLAG_UPDOWN_TAKE_LAST,
  payload: { isUp },
});
