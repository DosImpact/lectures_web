export const FLAG_UP = "FLAG_UP"; // base action
export const FLAG_DOWN = " FLAG_DOWN"; // base action

export const FLAG_UP_ASYNC = "FLAG_UP_ASYNC"; // sage start action
export const FLAG_DOWN_ASYNC = "FLAG_DOWN_ASYNC"; // sage start action

// base actionCreator -
export const flagUp = () => ({ type: FLAG_UP });
export const flagDown = () => ({ type: FLAG_DOWN });

// saga Creator
export const flagUpAsync = () => ({ type: FLAG_UP_ASYNC });
export const flagDownAsync = () => ({ type: FLAG_DOWN_ASYNC });
