import Centered from "./components/Centered";
import Spacer from "./components/Spacer";
import { ExitDoor } from "./views/ExitDoor";

function App() {
  return (
    <div>
      <ExitDoor />
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
