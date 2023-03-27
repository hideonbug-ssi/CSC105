import { useState } from "react";
import CardList from "./CardList"

function Todo() {
    const[todo, setTodo] = useState([]);

    //handle function
    function handleAdd() {
        setTodo([...todo, "new task"])
    }
    return(
        <div>
            <div
                style={{
                    disply: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div>
                    <h1 style={{ color: "#fefffb", fontSize: "60px"}}>incoming</h1>
                </div>
                <div
                    style={{
                        padding: "20px 30px",
                        backgroundColor: "#b0a3f5",
                        fontSize: "50px",
                        borderRadius: "10px",
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    {todo.length}
                </div>
            </div>
            <div
                style={{
                    padding: "20px",
                    backgroundColor: "#fefffe",
                    width: "500px",
                    borderRadius: "10px",
                    margin:"20px 0px",
                    fontSize: "25px",
                    color:"#7b7b7b"
                }}
                onClick={handleAdd}
            >
                + Add New Tasks
            </div>
            {todo.map((item)=>{
                return <CardList task={item}/>
            })}
        </div>
    )
}

export default Todo;