import { ReactNode } from "react";
import Layout from "../Layout";
import { useLocation } from "../Router";
import Headline from "./Headline";

export default function Location({ children, title }: LocationProps) {
  const { setCurrentLocation } = useLocation();

  return (
    <Layout>
      <a href="#" onClick={() => setCurrentLocation("")}>
        zurück
      </a>
      <Headline>{title}</Headline>
      {children}
    </Layout>
  );
}

interface LocationProps {
  children: ReactNode;
  title: string;
}
