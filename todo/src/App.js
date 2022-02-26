import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, saveToDos] = useState([]);
  const onChangeFunc = (event) => {
    setToDo(event.target.value);
  };
  const onSubmitFunc = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    saveToDos((toDos) => [
      { item: toDo, number: toDo.length + 1, complete: false },
      ...toDos,
    ]);
    setToDo("");
    console.log(toDos);
  };

  return (
    <div>
      <h1>MY ToDo List {toDos.length}</h1>
      <form onSubmit={onSubmitFunc}>
        <input
          onChange={onChangeFunc}
          value={toDo}
          required
          type="text"
          placeholder="Write to-do...."
        />
        <input type="submit" value="SUBMIT!" />
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}> {item} </li>
      ))}
    </div>
  );
}

export default App;
