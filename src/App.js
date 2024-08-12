
import styles from "./App.module.css";
import { useState, useEffect } from "react";

// clean-up fucntion: 컴포넌트가 제거될 때 실행됨
// return () => {};
function Hello() {
  function byeFn() {
    console.log("Bye :(");
  }
  function hiFn() {
    console.log("Hi :)");
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue(prev => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  // console.log("I run all the time");
  // useEffect : 해당 코드가 한번만 실행되게 해줌
  useEffect(() => {
    console.log("I run only once.")
  }, []); // keyword가 변화할 때만 실행
  useEffect(()=> {
    if (keyword.length > 5) {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]);
  useEffect(()=> {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  return (
    <div className="App">
      <input 
        value={keyword} 
        onChange={onChange}
        type="text" 
        placeholder="Search here..." />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <Hello />
    </div>
  );
}

export default App;
