import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ marginTop: 32 }} className="paper container">
      {children}
    </div>
  );
}
