import { getFirestore } from "@firebase/firestore";
import { useFirebaseApp, FirestoreProvider, useUser, useSigninCheck } from "reactfire";
import Task1 from "./task1Component";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "@firebase/auth";

const App = () => {
  const firestoreInstance = getFirestore(useFirebaseApp());
  const auth = getAuth(useFirebaseApp());
  const { userStatus, data: user } = useUser();
  const { signInStatus, data: signInCheckResult } = useSigninCheck();
  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch {}
  };

  if (userStatus === "loading") {
    console.log(user)
    return <span>loading...</span>;
  }
  if (!user) {
    console.log(user)
    return (
      <div>
        <button onClick={handleSignIn}>"Please sign in"</button>
      </div>
    );
  } else
    return (
      <div>
        {console.log(user.uid)}
        <h1>Welcome Back, {user.displayName}!</h1>
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          sign out
        </button>
        <FirestoreProvider sdk={firestoreInstance}>
          <h1>🌯</h1>
          <Task1 />
          <AddTask userId ={user.uid} ></AddTask>
          <TaskList userId = {user.uid}></TaskList>
        </FirestoreProvider>
      </div>
    );
};

export default App;
