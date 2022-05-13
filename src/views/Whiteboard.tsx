import equationUrl from "../assets/equation.png";
import Centered from "../components/Centered";
import Location from "../components/Location";

export default function Whiteboard() {
  return (
    <Location title="Whiteboard">
      <Centered>
        <p>
          Du schaust dir das Whiteboard genauer an. Auf ihr steht groß eine
          Gleichung. In der Ecke des Whiteboards steht eine kleine Notiz:
          <em>
            {" "}
            Wer f von 3 weiß, der kommt auch raus. Der Zahlen-Code ist erst der
            Zähler, dann der Nenner.{" "}
          </em>
        </p>
        <img className="no-border" src={equationUrl} alt="Equation" />
      </Centered>
    </Location>
  );
}
