import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import ListHeader from "../components/ListHeader";
import Item from "../components/Item";
import NewItem from "../components/NewItem";
import Footer from "../components/Footer";
import NoTask from "../components/NoTasks";
import LoginHeader from "../components/LoginHeader";

export default function List () {

    const [cookies] = useCookies(["userID"]);
    const [userData, setUserData] = useState();
    const navigate = useNavigate();
    useEffect(function() {
        if(cookies.userID) {
            const fetchUserData = async function() { 
                try {
                    const response = await axios.get(`http://localhost:3001/users/${cookies.userID}`);
                    setUserData(response.data);
                } catch (error) {
                    console.error("Could not fetch user data: " + error);
                }
            }

            fetchUserData();

        } else {
            navigate("/");
        }
    }, [cookies.userID, userData?.todo]);

    const date = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString(undefined, options);

    return (
        <>
            <LoginHeader username={userData?.name || ''}/>
            <ListHeader date={formattedDate}/>
            <NewItem id={cookies.userID} />
            {userData?.todo.length === 0 ? <NoTask/>
            : userData?.todo.map(function(todoObj) {
                return (
                    <Item key={todoObj._id} task={todoObj.userTask} taskId={todoObj._id} userId={cookies.userID}/>
                );
            })}
            <Footer/>
        </>
    );
}
