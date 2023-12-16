// importing librarys we need iun our app.js
import UserDetails from "./UserDetails";
import UserList from "./Userlist";
import { Route,Routes } from "react-router";

function App() {
  return (
    <div className="App">
      {/* home page and routing settings  */}
      <Routes>
      <Route index element={<UserList/>}></Route>
      <Route path="/User/:id" element={<UserDetails/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
