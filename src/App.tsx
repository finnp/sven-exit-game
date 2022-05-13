import Centered from "./components/Centered";
import Spacer from "./components/Spacer";
import { useLocation } from "./Router";
import Computer from "./views/Computer";
import { ExitDoor } from "./views/ExitDoor";
import Intro from "./views/Intro";
import Locations from "./views/Locations";
import StudentList from "./views/StudentList";
import Whiteboard from "./views/Whiteboard";

function App() {
  const { currentLocation } = useLocation();

  if (currentLocation === "") return <Intro />;
  if (currentLocation === "door") return <ExitDoor />;
  if (currentLocation === "whiteboard") return <Whiteboard />;
  if (currentLocation === "studentlist") return <StudentList />;
  if (currentLocation === "computer") return <Computer />;

  return <Locations />;
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
