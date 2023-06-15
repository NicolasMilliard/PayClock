import { FC, useState } from "react";
import Auth from "../../screens/Auth/Auth";
import Home from "../../screens/Home/Home";

const Main: FC = () => {
  const [annualIncome, setAnnualIncome] = useState(0);

  return <>{annualIncome === 0 ? <Auth /> : <Home />}</>;
};

export default Main;
