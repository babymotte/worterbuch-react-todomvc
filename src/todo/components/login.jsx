import React from "react";

export default function Login({ setHostname, setPort }) {
  const hostnameRef = React.useRef();
  const portRef = React.useRef();
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <label for="hostname">Hostname:</label>
          </td>
          <td>
            <input
              id="hostname"
              name="hostname"
              type="text"
              defaultValue="localhost"
              ref={hostnameRef}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label for="port">Port:</label>
          </td>
          <td>
            <input
              id="port"
              name="port"
              type="text"
              defaultValue="8080"
              ref={portRef}
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input
              type="submit"
              value="Go"
              onClick={() => {
                setHostname(hostnameRef.current.value);
                setPort(portRef.current.value);
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
