import { useState } from "react";
import Centered from "../components/Centered";
import Headline from "../components/Headline";
import Layout from "../Layout";
import { useLocation } from "../Router";

const texts = [
  `Eines Abends gegen Mitternacht möchtest du gerade ins Bett gehen. Da
  fällt dir etwas ein: Du hast den Computer bei der Arbeit angelassen! Das
  ist eine Stromverschwendung sondergleichen. So kannst du nicht ins Bett
  gehen.`,
  `Du schwinkst dich also auf's Fahrrad (Auto fahren wäre ja noch
    verschwenderischer) und machst dich auf den weiten Weg zur Uni. Das ist
    es definitiv wert. 🚴‍♂️`,
  `Als du endlich bei der Uni angekommen bist, machst du dich auf den Weg
  zu deinem Büro. Doch was ist das? Im Büro von Prof. Knust leuchtet noch Licht.
  Hat sie etwa vergessen das Licht auszuschalten? Du betrittst das Büro, um der
  Stromverschwendung ein Ende zu setzen.`,
  `Doch was ist das? Frau Prof. Knust ist in ihrem Büro mit dem Rücken zu dir an 
  ihr Whiteboard starrend. Sie redet mir sich selbst:  "Muhahahaha, endlich habe ich durch knifflige Kombinatorik den 
  Code zum Uni-Geheim-Safe berechnet. Nun kann ich die Herrschaft der Uni an mich reißen." Plötzlich dreht sie
  sich um und entdeckt dich!`,
  `"Sven! Was machst du um diese Uhrzeit hier?? Du wirst mich auch nicht mehr aufhalten können!" Sie 
  überlistest dich mit gekonnt berechneten Judo-Wurf, den du auch mit deinen Kung-Fu-Kenntnissen nicht erwidern kannst. Für einen Moment
  verlierst du das Bewusstsein. Als du wieder aufwachst, bist du in Ihrem Büro eingeschlossen!`,
];

export default function Intro() {
  const [index, setIndex] = useState(0);
  const { setCurrentLocation } = useLocation();

  return (
    <Layout>
      <Headline>Exit: Uni Osnabrück</Headline>
      <p>{texts[index]}</p>
      <Centered>
        <button onClick={onContinue}>Weiter</button>
      </Centered>
    </Layout>
  );

  function onContinue() {
    if (index === texts.length - 1) {
      setCurrentLocation("home");
    }
    setIndex(index + 1);
  }
}
