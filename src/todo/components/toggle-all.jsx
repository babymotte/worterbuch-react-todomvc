import React from "react";
import { useCompleteAll, useTodos } from "../hooks";

export default function ToggleAll() {
  const activeTodos = useTodos(false);
  const toggleAll = useCompleteAll();

  return (
    <div className="toggle-all-container">
      <input
        className="toggle-all"
        type="checkbox"
        data-testid="toggle-all"
        checked={activeTodos.length === 0}
        onChange={toggleAll}
      />
      <label className="toggle-all-label" htmlFor="toggle-all">
        Toggle All Input
      </label>
    </div>
  );
}
