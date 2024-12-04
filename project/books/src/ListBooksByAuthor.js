import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import {BOOKS_URL} from './constants'
import { useParams } from "react-router-dom";

export default function ListBooksByAuthor() {
    let { author } = useParams();
    const [books, setBooks] = useState([])
 
    useEffect(() => getBooksByAuthor())

    function getBooksByAuthor() {
        $.get(BOOKS_URL + "/author?author=" + author,
            (result) => {
                setBooks(result)
            }
        ) // get
    }

    return (
        <>
            <h3>List of Books by <span className="text-primary">[{author}] </span></h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book) =>
                            <tr key={book.id}>
                                <td>{book.title} </td>
                                <td>{book.price} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
