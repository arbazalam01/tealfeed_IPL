import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ItemContext = createContext();
function MainContext({ children }) {
  const [item, setItem] = useState(0);
  const [matchData, setMatchData] = useState(null);
  const [initialMatch, setInitialMatch] = useState(null);
  useEffect(() => {
    const apiHit = async () => {
      const { data } = await axios.get(
        "https://gist.githubusercontent.com/hdck007/57650c774d9631c097db855bf110a4b6/raw/58b00de2a8c06831fda2f471e1b635a90208a4be/ipl.json"
      );
      setMatchData(data);
      setInitialMatch(data);
    };
    apiHit();
  }, []);

  return (
    <ItemContext.Provider
      value={{
        item,
        setItem,
        matchData,
        setMatchData,
        initialMatch,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}

export default MainContext;
