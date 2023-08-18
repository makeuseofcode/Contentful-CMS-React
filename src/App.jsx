import { useEffect, useState } from "react";
import useContentful from "./hooks/useContentful";

const App = () => {
  const [users, setUsers] = useState([]);
  const { getUsers} = useContentful();

  useEffect(() => {
    getUsers().then((response) => response && setUsers(response));
  });

  return (
       <>
        <h1>Contentful CMS With React Tutorial</h1>
            {users.map((user, index) => (
            <div key={index}>
            <p> {user.userId} </p>  
            <p > {user.firstName} </p>
            <p > {user.role} </p>

            </div>  
          ))}  
      </>
  );
};
export default App


