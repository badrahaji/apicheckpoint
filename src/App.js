import UserDetails from "./UserDetails";
import axios from 'axios'
import UserList from "./Userlist";
import { useState,useEffect } from 'react'
import { Route,Routes } from "react-router";


function App() {
  const [data,setData]=useState([])
    useEffect(() => {
        const Data = async () => {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setData(response.data);
             
            };
        Data();
    },[])
  return (
    <div className="App">
      <Routes>
      <Route index element={<UserList/>}></Route>
      <Route path="/User/:id" element={<UserDetails data={data}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
