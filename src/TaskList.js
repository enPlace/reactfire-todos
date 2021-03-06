import { useFirebaseApp, useFirestore, useFirestoreCollectionData, useUser } from "reactfire";
import { collection, query, deleteDoc, doc } from "@firebase/firestore";
import { signOut, getAuth } from "@firebase/auth";

const TaskList = () => {
  const firestore = useFirestore();
  const todos = collection(firestore, "todos");
  const todosQuery = query(todos);
  const { status, data: todoData } = useFirestoreCollectionData(todosQuery, {
    idField: "id",
  });
 
  
  const deleteTask = async (id)=>{
    await deleteDoc(doc(firestore, "todos", id));
  }


  if (status === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>{console.log(todoData)}Done</h1>
      <ul>
        {todoData.map((todo) => {
          return (
            <li>
              {" "}
              <span> {todo.task}</span>{" "}
              <span>
                <button onClick = {()=>{
                  deleteTask(todo.id)
                }}>X</button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
