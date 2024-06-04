import { lazy } from "react";

const HomePage = lazy(()=>import("./Home"));

export default function Home() {
  return (
    <main>
 <HomePage/>
    </main>
  );
}
