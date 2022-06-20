import React, { useState } from "react";
import TodoLists from "./TodoLists";

const App = () =>{
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
      setInputList(event.target.value);
    };

    const deleteItems = (id) => {
      console.log("deleted");

      setItems((oldItems) =>{
        return oldItems.filter((arrElem, index) => {
          return index !== id;
        })
      })
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      setInputList("");
      };

    return <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1> ToDo Tasks </h1>
                <br />
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add Tasks" value={inputList} onChange={itemEvent} />
                <ol>

                    {Items.map((itemval, index) => {
                      return <TodoLists key={index} id ={index} text = {itemval} onSelect = {deleteItems}/>;
                    })}
                </ol>
                </form>


            </div>
        </div>
    
    </>;
};

export default App;