import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import Centered from "../components/Centered";
import Location from "../components/Location";
import Spacer from "../components/Spacer";

export default function Computer() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useLocalStorage("computerUnlocked", false);

  if (unlocked) {
    return (
      <Location title="Computer">
        <p>
          Du hast es geschafft, der Desktop from Frau Prof. Knust erscheint. Auf
          dem Desktop befindet sich eine einzige Datei <code>türcode.txt</code>.{" "}
          Du öffnest sie.
        </p>
        <p className="paper">
          Mit-Dozenten von
          <ul>
            <li>WS 16/17 Einführung in die Kombinatorische Optimierung</li>
            <li>SS 17 Scheduling</li>
            <li>SS 19 Graphenalgorithmen</li>
            <li>SS 21 Ressourcenbeschränkte Projektplanung</li>
          </ul>
          In dieser Reihenfolge
        </p>
      </Location>
    );
  }

  return (
    <Location title="Computer">
      <p>
        In der Ecke steht der Computer von Frau Prof. Knust. Vielleicht gibt der
        dir Hinweise wie du aus diesem Raum entkommst? Du schaltest den Computer
        an. Der Login-Bildschirm erscheint. Mist, was könnte nur das Passwort
        von Prof. Knust sein?
      </p>
      <Centered>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Spacer />
        <button onClick={onSubmitCode}>Submit</button>
        <p>Passwort-Hinweis: f(3)</p>
      </Centered>
    </Location>
  );

  function onSubmitCode() {
    if (input === "2027" || input === "20/27") {
      setUnlocked(true);
    } else {
      alert("Falsches Passwort!");
      setInput("");
    }
  }
}
