import { useState } from "react";
import axios from "axios";

export default function NewItem (props) {

    const id = props.id
    const [newItem, setNewItem] = useState("");

    function handleChange(event) {
        setNewItem(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!id) {
            console.error("Error: props.id is not defined.");
            return;
        }

        const newTask = {
            // request body
            task: newItem,
        }


        if(newItem != "") {
            axios.post(`http://localhost:3001/tasks/${id}`, newTask)
            .then(response => {
                // Assuming the server will respond with the updated user data
                console.log("Updated user data:", response.data);
                // Clear the input field after successful submission
                setNewItem("");
            })
            .catch(error => {
                console.error("Error adding new item:", error);
            });
        } else {
            alert("Task can't be empty");
        }

        
    }

    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            <input type="text" name="newItem" placeholder="Add task" value={newItem} onChange={handleChange} autoComplete="off" />
            <button type="submit">+</button>
        </form>

    );
}