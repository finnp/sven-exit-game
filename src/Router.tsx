import { createContext, ReactNode, useContext, useState } from "react";

const RouterContext = createContext({
  currentLocation: "",
  setCurrentLocation: (location: string) => {},
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentLocation, setCurrentLocation] = useState("");

  return (
    <RouterContext.Provider value={{ currentLocation, setCurrentLocation }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useLocation() {
  return useContext(RouterContext);
}
