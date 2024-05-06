import { useState } from "react";
import "./style.css";

export default function App() {
  const [newItem, setNewItem] = useState("");

  return (
    <>
      <form className="new-item-form">
        <div className="form">
          <label>New Item</label>
          <input value={newItem} type="text" id="item"></input>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">To-Do list</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn-btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn-btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
