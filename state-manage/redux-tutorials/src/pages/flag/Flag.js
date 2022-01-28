import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FlagView from "./components/FlagView";
import { flagDownAsync, flagUpAsync } from "./state/actions";

const Flag = () => {
  const dispatch = useDispatch();
  const flagUpCount = useSelector((store) => store.flag.flagUpCount);

  const handleFlagUp = () => {
    dispatch(flagUpAsync());
  };
  const handleFlagDown = () => {
    dispatch(flagDownAsync());
  };

  return (
    <div>
      <FlagView
        flagUpCount={flagUpCount}
        handleFlagUp={handleFlagUp}
        handleFlagDown={handleFlagDown}
      />
    </div>
  );
};

export default Flag;
