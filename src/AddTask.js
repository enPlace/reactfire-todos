import { setDoc, doc } from "@firebase/firestore";
import { useFirestore } from "reactfire";
import { useState } from "react";

const AddTask = ({userId}) => {
  const [count, setCount] = useState(10);
  const [inputVal, setInputVal] = useState("");
  const firestore = useFirestore();

  const addTask = async () => {
    console.log(inputVal);
    const docData = { task: inputVal };
    setInputVal("");
    const docRef = await setDoc(
      doc(firestore, userId, `task${count}`),
      docData
    );
    setCount(count + 1);
    console.log(docRef);
  };

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        addTask();
      }}
    >
      <input
        type="text"
        placeholder="add a new task..."
        value={inputVal}
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default AddTask;
