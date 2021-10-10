import { getFirestore } from "@firebase/firestore";
import { useFirebaseApp , FirestoreProvider} from "reactfire";
import Task1 from "./task1Component";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

const App = () => {
    const firestoreInstance = getFirestore(useFirebaseApp());
    return (
      <FirestoreProvider sdk={firestoreInstance}>
        <h1>🌯</h1>
        <Task1 />
        <AddTask></AddTask>
        <TaskList></TaskList>
      </FirestoreProvider>
    );
}
 
export default App;