import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const fetchedData = await fetch("http://localhost:3000/");
    const response = await fetchedData.json();
    setData(response);
  }

  return (
    <>
      <div>
        <h1>Comments</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.postId}: {item.comment}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
