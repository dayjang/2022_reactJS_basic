import { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run this line all the time! ");
  useEffect(() => {
    console.log("Call THE API....");
  }, []); // 지켜볼 대상 없는것, 한번만 실행 & 끝

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search For", keyword);
    }
  }, [keyword]); // 지켜볼 대상 keyword, 바뀔때마다 실행됨

  useEffect(() => {
    console.log(" keyword or counter changed....");
  }, [keyword, counter]); // keyword, counter 둘 중 하나가 바뀌면 실행됨

  return (
    <div>
      {counter}
      <button onClick={onClick}>Count!</button>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Write something..."
      />
    </div>
  );
}

export default App;
