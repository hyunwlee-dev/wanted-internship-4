import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const getData = async () => {
    const reponse = await axios.get('http://localhost:4000/data');
    console.log(reponse.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      begin project
    </>
  )
}

export default App
