
import { useState, useEffect } from "react";
import Icon from "../../components/icon/index";
import { StyledList } from "./style";

export default function List () {
    const [users, setUsers] = useState([]);

    async function fetchUsers() {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data);
    }

    async function deleteUser(userId) {
        const response = await fetch(`/api/users/${userId}`, {
            method: "DELETE",
        });

        if (response.ok) {
            setUsers(users.filter((user) => user.id !== userId));
        } else {
            console.error("Failed to delete user");
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