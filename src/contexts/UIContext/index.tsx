"use client";
import { ReactNode, createContext, useState } from "react";

export const Context = createContext({
  theme: "light",
  switchTheme: () => {},
});

const UIContext = ({
  children,
}: {
  children: ReactNode | JSX.Element | JSX.Element[] | string;
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    if (typeof window === "object") {
      document.body.classList.add(newTheme);
      document.body.classList.remove(theme);
    }
    setTheme(newTheme);
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
