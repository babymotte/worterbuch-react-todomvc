import { useCreateTodo } from "../hooks";
import { Input } from "./input";

export function Header() {
  const addItem = useCreateTodo();

  return (
    <header className="header" data-testid="header">
      <h1>todos</h1>
      <Input
        onSubmit={addItem}
        label="New Todo Input"
        placeholder="What needs to be done?"
      />
    </header>
  );
}
