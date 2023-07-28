"use client";
import { ReactNode, createContext, useState } from "react";

export const Context = createContext({
  theme: "light",
  switchTheme: (theme: string) => {},
});

const UIContext = ({
  children,
}: {
  children: ReactNode | JSX.Element | JSX.Element[] | string;
}) => {
  const [theme, setTheme] = useState("light");

  const switchTheme = (newTheme: string) => {
    if (typeof window === "object") {
      console.log("HERE");
      document.body.classList.add(newTheme);
      document.body.classList.remove(theme);
    }
    setTheme(theme);
  };
  return (
    <Context.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default UIContext;
