import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import Centered from "../components/Centered";
import Location from "../components/Location";
import Spacer from "../components/Spacer";
import End from "./End";

export function ExitDoor() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useLocalStorage("exitdoorUnlocked", false);

  const doorCode = "1342";

  if (unlocked) return <End />;

  return (
    <Location title="Tür">
      <p>
        Du siehst vor dir eine Tür. Du rüttelst an ihr. Sie ist verschlossen,
        natürlich. Jetzt fällt dir der Zahlencode auf an der Tür. Das ist aber
        nicht Uni-Standard.
      </p>
      <Centered>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Spacer />
        <button onClick={onSubmitCode}>Submit</button>
      </Centered>
    </Location>
  );

  function onSubmitCode() {
    if (input === doorCode) {
      setUnlocked(true);
    }
  }
}
