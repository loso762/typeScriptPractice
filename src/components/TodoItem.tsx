import {useContext} from "react";
import classes from "./TodoItem.module.css";
import {TodosContext} from "../store/todos-context";

const TodoItem: React.FC<{text: string; id: string}> = (props) => {
  const todosCtx = useContext(TodosContext);

  return (
    <li className={classes.item} onClick={() => todosCtx.removeTodo(props.id)}>
      {props.text}
    </li>
  );
};

export default TodoItem;
