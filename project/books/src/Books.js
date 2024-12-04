import React from "react";
import ListBooks from "./ListBooks";
import ListAuthors from "./ListAuthors";
import AddBook from "./AddBook"
import AddBookFetch from "./AddBookFetch"
import BookDetails from "./BookDetails"
import SearchBooks from './SearchBooks'
import EditBook from "./EditBook"
import ListBooksByAuthor from "./ListBooksByAuthor";

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";




export default function Books() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ListBooks />} />
                    <Route path="index.html" element={<ListBooks />} />
                    <Route path="list" element={<ListBooks />} />
                    <Route path="add" element={<AddBook />} />
                    <Route path="addfetch" element={<AddBookFetch />} />
                    <Route path="search" element={<SearchBooks />} />
                    <Route path="edit/:bookId" element={<EditBook />} />
                    <Route path="details/:bookId" element={<BookDetails />} />
                    <Route path="authors" element={<ListAuthors />} />
                    <Route path="booksByAuthor/:author" element={<ListBooksByAuthor />} />
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
            <h2>Books</h2>
            <nav className="nav navbar-expand-sm bg-danger">
                <Link className="nav-link text-white" to="/list">List</Link>
                <Link className="nav-link text-white" to="/search">Search Books</Link>
                <Link className="nav-link text-white" to="/authors">Authors</Link>
                <Link className="nav-link text-white" to="/add">Add Book</Link>
                <Link className="nav-link text-white" to="/addfetch">Add Book With Fetch</Link>
            </nav>

            <p></p>
            <Outlet />

        </div>
    )
}