
import { useState, useEffect } from "react";
import Icon from "../../components/icon/index";
import { StyledList } from "./style";

export default function List () {
    const [users, setUsers] = useState([]);

    async function fetchUsers() {
    try {
        const response = await fetch("/api/users");

        if (!response.ok) {
            throw new Error("Failed to load users");
        }

        const data = await response.json();
        setUsers(data);
        } catch (error) {
            console.error(error);
            alert("Could not load the users list.");
        }
    }

    async function deleteUser(userId) {
    if (!window.confirm("Are you sure you want to delete this user?")) {
        return;
    }

    try {
        const response = await fetch(`/api/users/${userId}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            const data = await response.json().catch(() => ({}));
            alert(data.error || "Failed to delete user.");
            return;
        }

        setUsers((prev) => prev.filter((user) => user.id !== userId));
        } catch (error) {
            console.error(error);
            alert("Could not connect to the server. Please try again later.");
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <StyledList>
            <Icon />
            <h2>Users List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <p><strong>Name:</strong> {user.firstname}</p>
                        <p><strong>Last Name:</strong> {user.lastname}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </StyledList>
    );
}