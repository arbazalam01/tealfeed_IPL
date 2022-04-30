import React, { createContext, useState } from "react";

export const ItemContext = createContext();
function MainContext({ children }) {
  const [item, setItem] = useState(0);
  return (
    <ItemContext.Provider value={{ item, setItem }}>
      {children}
    </ItemContext.Provider>
  );
}

export default MainContext;
