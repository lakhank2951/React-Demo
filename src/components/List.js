import { useState } from "react";
import Reusable from "./Reusable";

function List() {
    const [users, setUsers] = useState([
        {
            name: 'Lakhan',
            age: 30,
            email: 'lakhan@test.com',
            addres: [
                {
                    pinCode: 424001,
                    city: 'Dhule'
                },
                {
                    pinCode: 411052,
                    city: 'Pune'
                }
            ]
        },
        {
            name: 'Vijay',
            age: 32,
            email: 'vijay@test.com',
            addres: [
                {
                    pinCode: 413512,
                    city: 'Latur'
                },
                {
                    pinCode: 411052,
                    city: 'Pune'
                }
            ]
        },
        {
            name: 'Test',
            age: 21,
            email: 'test@test.com',
            addres: [
                {
                    pinCode: 411038,
                    city: 'Kothrud'
                },
                {
                    pinCode: 411052,
                    city: 'Pune'
                }
            ]
        }
    ])
    return (
        <div className="container">
            <h1>List Component</h1>
            <Reusable users={users} />
        </div>
    )
}

export default List;
