import { ReactNode } from "react";
import Layout from "../Layout";
import Headline from "./Headline";

export default function Location({ children, title }: LocationProps) {
  return (
    <Layout>
      <a href="#home">zurück</a>
      <Headline>{title}</Headline>
      {children}
    </Layout>
  );
}

interface LocationProps {
  children: ReactNode;
  title: string;
}
