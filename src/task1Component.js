import {doc} from "firebase/firestore"
import { useFirestoreDocData, useFirestore } from "reactfire"

const Task1 = () => {
    const taskRef = doc(useFirestore(), "todos", "task1")
    const {status, data} = useFirestoreDocData(taskRef, {idField: "id"})
    if (status === 'loading') {
        return <p>Fetching burrito flavor...</p>;
      }
    
      return <p>done</p>;
}
 
export default Task1;