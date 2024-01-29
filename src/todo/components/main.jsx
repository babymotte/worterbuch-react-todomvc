import { useLocation } from "react-router-dom";
import Item from "./item";
import classnames from "classnames";
import ToggleAll from "./toggle-all";
import { useTodos } from "../hooks";

function MainItems({ completed }) {
  const todos = useTodos(completed);
  return (
    <main className="main" data-testid="main">
      {todos.length > 0 ? <ToggleAll /> : null}
      <ul className={classnames("todo-list")} data-testid="todo-list">
        {todos.map((todo) => (
          <Item todo={todo} key={todo} />
        ))}
      </ul>
    </main>
  );
}

export function Main() {
  const { pathname: route } = useLocation();
  const active = route === "/active";
  const completed = route === "/completed";

  return active ? (
    <MainItems completed={false} />
  ) : completed ? (
    <MainItems completed={true} />
  ) : (
    <MainItems />
  );
}
