import { useState } from "react";

function Movie() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    if (toDo === "") {
      return;
    }
    setToDos(currentToDos => [toDo, ...currentToDos]);
    setToDo("");
  };

  console.log(toDos);

  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  );
}

export default Movie;
