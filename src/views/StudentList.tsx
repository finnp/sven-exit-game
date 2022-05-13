import Location from "../components/Location";

export default function StudentList() {
  return (
    <Location title="Liste">
      <p>
        Da liegt ein Blatt Papier rum. Du hebst es auf. Anscheinend hat Frau
        Prof. Knust hier sorgfältig ihre Lieblingsstudenten dokumentiert:
      </p>
      <div className="paper">
        <p>Meine absoluten Lieblingsstudenten:</p>
        <ol>
          <li>Sven</li>
          <li>Jan-Niklas</li>
          <li>Florian</li>
          <li>Benjamin</li>
          <li>David</li>
        </ol>
      </div>
    </Location>
  );
}
