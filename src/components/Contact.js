import { NavLink, Outlet } from "react-router-dom";

function Contact() {
    return (
        <>
            <h1>Nested Routing</h1>

            <ul>
                <li>
                    <NavLink className="custom-link" to="about">About</NavLink>
                </li>
                <li>
                    <NavLink className="custom-link" to="blog">Blog</NavLink>
                </li>
            </ul>

            <Outlet />
        </>

    )
}

export default Contact;