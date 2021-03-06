import styled from "styled-components";
import Headline from "../components/Headline";
import Layout from "../Layout";
import { useLocation } from "../Router";

export default function Locations() {
  const { setCurrentLocation } = useLocation();

  return (
    <Layout>
      <Headline>Büro</Headline>
      <LocationList>
        <Location title="Tür" onClick={() => setCurrentLocation("door")} />
        <Location
          title="Whiteboard"
          onClick={() => setCurrentLocation("whiteboard")}
        />
        <Location
          title="Liste"
          onClick={() => setCurrentLocation("studentlist")}
        />
        <Location
          title="Computer"
          onClick={() => setCurrentLocation("computer")}
        />
      </LocationList>
    </Layout>
  );
}

const LocationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

function Location({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <LocationContainer className="card" onClick={onClick}>
      <div className="card-body">
        <h3>{title}</h3>
      </div>
    </LocationContainer>
  );
}

const LocationContainer = styled.div`
  min-width: 200px;
  cursor: pointer;
  text-align: center;
`;
