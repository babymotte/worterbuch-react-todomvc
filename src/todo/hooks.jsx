import React from "react";
import {
  usePDelete,
  usePDeleteLater,
  usePSubscribe,
  useSet,
  useSetLater,
  useSubscribe,
} from "worterbuch-react";
import { nanoid } from "./nanoid";

export function useTodos(completed) {
  const completedStates = usePSubscribe("todo-mvc/todos/?/completed");
  const todos = [];
  completedStates.forEach((value, key) => {
    if (completed === undefined || value === completed) {
      todos.push(key.split("/")[2]);
    }
  });
  todos.sort();
  return todos;
}

export function useRemoveCompleted() {
  const remove = usePDeleteLater();
  const completedTodos = useTodos(true);
  return React.useCallback(() => {
    completedTodos.forEach((todo) => remove(`todo-mvc/todos/${todo}/#`));
  }, [completedTodos, remove]);
}

export function useCreateTodo() {
  const set = useSetLater();
  return React.useCallback(
    (title) => {
      const todo = `${Date.now()}-${nanoid(8)}`;
      set(`todo-mvc/todos/${todo}/title`, title);
      set(`todo-mvc/todos/${todo}/completed`, false);
    },
    [set]
  );
}

export function useTitle(todo) {
  const title = useSubscribe(`todo-mvc/todos/${todo}/title`);
  const setTitle = useSet(`todo-mvc/todos/${todo}/title`);
  return [title, setTitle];
}

export function useCompleted(todo) {
  const completed = useSubscribe(`todo-mvc/todos/${todo}/completed`);
  const setCompleted = useSet(`todo-mvc/todos/${todo}/completed`);
  return [completed, setCompleted];
}

export function useRemoveTodo(todo) {
  const remove = usePDelete(`todo-mvc/todos/${todo}/#`);
  return remove;
}

export function useCompleteAll() {
  const set = useSetLater();
  const active = useTodos(false);
  return React.useCallback(
    () =>
      active.forEach((todo) => set(`todo-mvc/todos/${todo}/completed`, true)),
    [active, set]
  );
}
