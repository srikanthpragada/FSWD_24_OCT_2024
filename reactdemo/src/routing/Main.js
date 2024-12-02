import React from "react";
import First from "./First";
import Second from "./Second";
import Contact from "./Contact";

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";


export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Default route */}
                    <Route index element={<First />} />
                    <Route path="first" element={<First />} />
                    <Route path="second" element={<Second />} />
                    <Route path="contact/:info" element={<Contact />} />
                    <Route path="*" element={
                        <h3>Sorry! Page Not Found!!!</h3>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function Layout() {
    return (
        <div className="container">
            <h2>Routing Demo</h2>
            <nav className="nav navbar-expand-sm bg-danger">
                <Link className="nav-link text-white" to="/first">First</Link>
                <Link className="nav-link text-white" to="/second">Second</Link>
                <Link className="nav-link text-white" to="/contact/phone">Phone</Link>
                <Link className="nav-link text-white" to="/contact/email">Email</Link>
                <Link className="nav-link text-white" to="/error">Error</Link>
            </nav>
            <p></p>
            <Outlet />
        </div>
    )
}