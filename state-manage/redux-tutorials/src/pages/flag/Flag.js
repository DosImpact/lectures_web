import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FlagView from "./components/FlagView";
import {
  flagDownAsync,
  flagUpAsync,
  flagUpDownTakeEvery,
  flagUpDownTakeFirst,
  flagUpDownTakeLast,
} from "./state/actions";

const Flag = () => {
  const dispatch = useDispatch();
  const flagUpCount = useSelector((store) => store.flag.flagUpCount);

  const handleFlagUp = () => {
    dispatch(flagUpAsync());
  };
  const handleFlagDown = () => {
    dispatch(flagDownAsync());
  };
  const handleFlagUpDownTakeEvery = (isUp) => {
    dispatch(flagUpDownTakeEvery({ isUp }));
  };
  const handleFlagUpDownTakeFirst = (isUp) => {
    dispatch(flagUpDownTakeFirst({ isUp }));
  };
  const handleFlagUpDownTakeLast = (isUp) => {
    dispatch(flagUpDownTakeLast({ isUp }));
  };

  return (
    <div>
      <FlagView
        flagUpCount={flagUpCount}
        handleFlagUp={handleFlagUp}
        handleFlagDown={handleFlagDown}
        handleFlagUpDownTakeEvery={handleFlagUpDownTakeEvery}
        handleFlagUpDownTakeFirst={handleFlagUpDownTakeFirst}
        handleFlagUpDownTakeLast={handleFlagUpDownTakeLast}
      />
    </div>
  );
};

export default Flag;
