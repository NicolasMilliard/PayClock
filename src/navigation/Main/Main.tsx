import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import Auth from "../../screens/Auth/Auth";
import Home from "../../screens/Home/Home";

const Main: FC = () => {
  const income = useSelector((state: RootState) => state.income);

  return <>{income.value === 0 ? <Auth /> : <Home />}</>;
};

export default Main;
