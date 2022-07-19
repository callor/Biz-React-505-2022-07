import { useContext, useState, createContext } from "react";

// AppContext 라는 이름으로 Store 개설
const AppContext = createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [bucketList, setBucketList] = useState([]);

  const props = {
    text,
    setText,
    bucketList,
    setBucketList,
  };
  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};

export { AppContextProvider, useAppContext };
