import axios from "axios";
import { useState, useEffect } from "react";

export default function Item (props) {

    const [isDeleted, setIsDeleted] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    useEffect(function() {
        setIsAdded(true);
    }, []);

    async function handleClick () {

        const taskId = props.taskId;
        const userId = props.userId;

        try {
            setIsAdded(false);
            setIsDeleted(true);
            const response = await axios.delete(`http://localhost:3001/tasks/delete/${userId}/${taskId}`);
            console.log("Task deleted successfully");
        } catch (error) {
            console.log("Error deleting task: ", error);
        }
    }

    return (
        <div className={`item ${isAdded ? "fade-in" : ""} ${isDeleted ? "fade-out" : ""}`}>
            <p>{props.task}</p>
            <i class="fa-solid fa-square-check" onClick={handleClick}></i>
        </div>
    );
}