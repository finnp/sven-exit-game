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
          dem Desktop befindet sich eine einzige Datei <code>türcode.mp4</code>.{" "}
          Du öffnest sie.
        </p>
        <p className="paper">
          <Centered>
            <iframe
              width="315"
              height="560"
              src="https://www.youtube.com/embed/kvbxLx4vsvY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Centered>
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
