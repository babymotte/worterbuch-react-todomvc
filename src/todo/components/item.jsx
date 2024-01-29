import { useState, useCallback } from "react";
import classnames from "classnames";
import { Input } from "./input";
import { useCompleted, useRemoveTodo, useTitle } from "../hooks";

export default function Item({ todo }) {
  const [isWritable, setIsWritable] = useState(false);

  const [title, setTitle] = useTitle(todo);
  const [completed, setCompleted] = useCompleted(todo);
  const removeTodo = useRemoveTodo(todo);

  const toggleItem = useCallback(
    () => setCompleted(!completed),
    [completed, setCompleted]
  );

  const handleDoubleClick = () => setIsWritable(true);
  const handleBlur = () => setIsWritable(false);

  const handleUpdate = (title) => {
    if (title.length === 0) {
      removeTodo();
    } else {
      setTitle(title);
    }
    setIsWritable(false);
  };

  return (
    <li className={classnames({ completed })} data-testid="todo-item">
      <div className="view">
        {isWritable ? (
          <Input
            onSubmit={handleUpdate}
            label="Edit Todo Input"
            defaultValue={title}
            onBlur={handleBlur}
            todo={todo}
          />
        ) : (
          <>
            <input
              className="toggle"
              type="checkbox"
              data-testid="todo-item-toggle"
              checked={completed}
              onChange={toggleItem}
            />
            <label
              data-testid="todo-item-label"
              onDoubleClick={handleDoubleClick}
            >
              {title}
            </label>
            <button
              className="destroy"
              data-testid="todo-item-button"
              onClick={removeTodo}
            />
          </>
        )}
      </div>
    </li>
  );
}
