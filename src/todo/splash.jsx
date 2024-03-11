import React from "react";
import Login from "./components/login";
import { App } from "./app";
import { Worterbuch } from "worterbuch-react";

export default function Splash() {
  const [hostname, setHostname] = usePersistedState(
    "worterbuch.todomvc.server.host"
  );
  const [port, setPort] = usePersistedState("worterbuch.todomvc.server.port");

  return hostname !== undefined && port !== undefined ? (
    <Worterbuch
      config={{
        backendScheme: "ws",
        backendHost: hostname,
        backendPort: port,
        backendPath: "/ws",
      }}
    >
      <App setHostname={setHostname} setPort={setPort} />
    </Worterbuch>
  ) : (
    <Login setHostname={setHostname} setPort={setPort} />
  );
}

function usePersistedState(key, defaultValue) {
  const [state, updateState] = React.useState(load(key, defaultValue));
  const setState = React.useCallback(
    (value) => {
      persist(key, value);
      updateState(value);
    },
    [key]
  );
  return [state, setState];
}

function load(key, defaultValue) {
  if (window.localStorage) {
    const item = window.localStorage.getItem(key);
    if (item) {
      try {
        return JSON.parse(item);
      } catch (err) {
        return defaultValue;
      }
    } else {
      return defaultValue;
    }
  } else {
    return defaultValue;
  }
}

function persist(key, value) {
  if (window.localStorage) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}
