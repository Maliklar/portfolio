import { useContext } from "react";
import UIContext, { Context } from ".";

const useUIContext = () => {
  try {
    const context = useContext(Context);
    return context;
  } catch {
    throw Error("Context used outside of provider");
  }
};
export default useUIContext;
