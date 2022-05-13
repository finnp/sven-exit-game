import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const RouterContext = createContext({
  currentLocation: "",
  setCurrentLocation: (location: string) => {},
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentLocation, setLocation] = useState("");
  useBackButton();

  return (
    <RouterContext.Provider value={{ currentLocation, setCurrentLocation }}>
      {children}
    </RouterContext.Provider>
  );

  function setCurrentLocation(route: string) {
    setLocation(route);
    history.pushState(null, "", `#${route}`);
  }

  function useBackButton() {
    useEffect(() => {
      function updateLocation() {
        setCurrentLocation(window.location.hash.slice(1));
      }

      updateLocation();

      window.addEventListener("popstate", updateLocation);

      return () => {
        window.removeEventListener("popstate", updateLocation);
      };
    }, []);
  }
}

export function useLocation() {
  return useContext(RouterContext);
}
