
 
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [items, setItems]=useState([])
  const [ base64String]=useState([])
  const getdata =()=> {
    axios
      .get("http://localhost:4000/api/auth/63b0730ad37228c15f42a2c8")
      .then((res) =>{ 
        const items= res.data
        setData(items)
        setItems(items)
        console.log(items) })
      .catch((err) => console.log(err, "it has an error"));
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="">
      <h1>Image uploading react</h1>
      
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(Data.img.data.data))
        );
        return <img src={`data:image/png;base64,${base64String}`} width="300"/>
      
    </div>
  );
}

export default App