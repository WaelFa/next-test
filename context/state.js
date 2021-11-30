import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [products, setProducts] = useState([]);
  const [showCartContent, setShowCartContent] = useState(false);
  let sharedState = {
    products,
    setProducts,
    showCartContent,
    setShowCartContent,
  };
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
