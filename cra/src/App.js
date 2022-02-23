import { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("i run this line all the time! ");
  useEffect(() => {
    console.log("Call THE API....");
  }, []);
  return (
    <div>
      {counter}
      <button onClick={onClick}>Count!</button>
    </div>
  );
}

export default App;
