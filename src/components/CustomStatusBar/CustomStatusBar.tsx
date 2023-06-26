import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CustomStatusBar: FC = () => {
  const darkMode = useSelector(({ darkTheme }: RootState) => darkTheme);

  return <StatusBar style={darkMode.value ? "light" : "dark"} />;
};

export default CustomStatusBar;
