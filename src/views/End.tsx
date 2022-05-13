import { useState } from "react";
import Centered from "../components/Centered";
import Headline from "../components/Headline";
import Layout from "../Layout";
import { useLocation } from "../Router";

const texts = [
  `Du hast es geschafft! Du bist dem Büro entkommen! Jetzt musst du aber noch Frau Prof. Knust aufhalten!`,
  `Wo wollte sie nochmal hin? Ach ja klar zum Uni-Tresor, jetzt aber schnell hin da. Der ist doch gleich bei
  der Mensa.`,
  `Du erreichst die Mensa und öffnest die Tür. Doch nanu was ist denn hier los?`,
  <>
    Eine Gruppe kreischt: <Headline>Überraschung!!</Headline>
    Es ist Frau Knust zusammen mit Jan-Niklas und allen anderen Leuten aus der
    Kombinatorik. Alle deine anderen Universitäten-Freunde und Kollegen sind da.
    Aber auch Finn. Mensch was macht der denn hier?
  </>,
  `Frau Knust klärt auf: "Wir haben dies lange geplant, um dich an deinem Geburtstag zu überraschen.
  Keine Sorge ich will nicht die Uni-Herrschaft an mich reißen. Ich interessiere mich nur für Zahlen."`,
  `Du bist komplett verwirrt. "Aber heute ist doch gar nicht mein Geburtstag?"`,
  `Alle sind verwirrt und tuscheln zusammen. Dann gibt Frau Knust es verschwitzt zu: "Ja hahah typisch, 
  dann habe ich mich wohl verrechnet" 😅`,
  `Da denkst du dir, dass es so wenigstens eine richtige Überraschung ist und ihr feiert alle zusammen
  trozdem deinen Geburtstag 🥳`,
  <>
    <Headline>Happy End (and belated Birthday)</Headline>
  </>,
];

export default function End() {
  const [index, setIndex] = useState(0);
  const { setCurrentLocation } = useLocation();

  return (
    <Layout>
      {index < texts.length - 1 && (
        <Headline>Endlich raus aus dem Büro...</Headline>
      )}
      <p>{texts[index]}</p>
      <Centered>
        {index < texts.length - 1 ? (
          <button onClick={onContinue}>Weiter</button>
        ) : (
          <iframe
            src="https://giphy.com/embed/h3WH1rqyW2bmfOVqSi"
            width="360"
            height="480"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        )}
      </Centered>
    </Layout>
  );

  function onContinue() {
    setIndex(index + 1);
  }
}
