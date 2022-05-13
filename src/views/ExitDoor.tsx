import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import Spacer from "../components/Spacer";
import Layout from "../Layout";

export function ExitDoor() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useLocalStorage("exitdoorUnlocked", false);

  const doorCode = "1234";

  if (unlocked) {
    return (
      <Layout>
        <h1>Exit Door</h1>
        <p>Du hast es geschafft! Jetzt aber schnell die Welt retten.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Exit Door</h1>
      <p>
        Du siehst vor dir eine Tür. Du rüttelst an ihr. Sie ist verschlossen,
        natürlich. Jetzt fällt dir der Zahlencode auf an der Tür. Das ist aber
        nicht Uni-Standard.
      </p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <Spacer />
      <button onClick={onSubmitCode}>Submit</button>
    </Layout>
  );

  function onSubmitCode() {
    if (input === doorCode) {
      setUnlocked(true);
    }
  }
}
