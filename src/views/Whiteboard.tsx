import equationUrl from "../assets/equation.png";
import Centered from "../components/Centered";
import Location from "../components/Location";

export default function Whiteboard() {
  return (
    <Location title="Whiteboard">
      <Centered>
        <p>
          Du schaust dir das Whiteboard genauer an. Auf ihr steht groß eine
          Gleichung.
        </p>
        <img className="no-border" src={equationUrl} alt="Equation" />
      </Centered>
    </Location>
  );
}
