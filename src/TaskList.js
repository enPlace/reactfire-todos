import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { collection, query, orderBy } from "@firebase/firestore";
import { useState } from "react";

const TaskList = () => {
    const firestore = useFirestore();
    const todos = collection(firestore, 'todos');
    const todosQuery = query(todos);
    const { status, data: todoData } = useFirestoreCollectionData(todosQuery, {
      idField: 'id',
    });
    if (status === 'loading') {
        return <h1>Loading...</h1>;
      }
    return (
        
        <div>
            <h1>{console.log(todoData)}Done</h1>
            <ul>
            {todoData.map(todo=>{
               return(
                   <li>{todo.task}</li>
               )
            })}
            </ul>
        </div>
        
     );
}
 
export default TaskList;