import Centered from "./components/Centered";
import Spacer from "./components/Spacer";
import { useLocation } from "./Router";
import { ExitDoor } from "./views/ExitDoor";
import Locations from "./views/Locations";

function App() {
  const { currentLocation } = useLocation();

  if (currentLocation === "door") return <ExitDoor />;

  return (
    <div>
      <Locations />
      <ResetLocalStorage />
    </div>
  );
}

export default App;

function ResetLocalStorage() {
  return (
    <Centered>
      <Spacer />
      <button onClick={resetLocalStorage}>Reset Local Storage</button>
    </Centered>
  );

  function resetLocalStorage() {
    localStorage.clear();
    location.reload();
  }
}
