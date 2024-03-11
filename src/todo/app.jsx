import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import "./app.css";
import { useWorterbuchConnected } from "worterbuch-react";
import React from "react";

export function App({ setHostname, setPort }) {
  const [connCheck, setConnCheck] = React.useState(true);
  const [conn] = useWorterbuchConnected();
  setTimeout(() => setConnCheck(false), 1000);
  React.useLayoutEffect(() => {
    if (!connCheck && !conn) {
      console.log("not connected!");
      setHostname(undefined);
      setPort(undefined);
    }
  }, [conn, connCheck, setHostname, setPort]);
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
