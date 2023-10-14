import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/user`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  return <h1>{import.meta.env.VITE_URL}</h1>;
}

export default App;
