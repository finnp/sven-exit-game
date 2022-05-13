import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import Centered from "../components/Centered";
import Headline from "../components/Headline";
import Spacer from "../components/Spacer";
import Layout from "../Layout";

export function ExitDoor() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useLocalStorage("exitdoorUnlocked", false);

  const doorCode = "1234";

  if (unlocked) {
    return (
      <Layout>
        <Headline>Exit Door</Headline>
        <p>Du hast es geschafft! Jetzt aber schnell die Welt retten.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <Headline>Exit Door</Headline>
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
    </Layout>
  );

  function onSubmitCode() {
    if (input === doorCode) {
      setUnlocked(true);
    }
  }
}
