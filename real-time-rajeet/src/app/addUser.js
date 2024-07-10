'use client'
import Button from "./components/button";

export default function AddUser(props) {
    const addUser = (e) => {
        e.preventDefault();
        console.log("hit me hard")
    }
    return(
        <div style={{display: "contents", width: 100}}>
        <Button text={"addUser"}
        onClick={e=>addUser(e)}
        />
      <h1>Current User ADMIN-:
      </h1>
      </div>
  );

}