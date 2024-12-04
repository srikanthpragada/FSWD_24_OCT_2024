import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { AUTHOR_URL } from './constants'
import { Link } from "react-router-dom";

export default function ListAuthors() {
    const [authors, setAuthors] = useState([])

    useEffect(() => getAuthors(), [])

    function getAuthors() {
        $.get(AUTHOR_URL,
            (result) => {
                setAuthors(result)
            }
        ) // get
    }

    return (
        <>
            <h3>List of Authors</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Author Name</th>
                        <th>Book Count</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author) =>
                            <tr key={author.author}>
                                <td>{author.author} </td>
                                <td> {author.bookCount} </td>
                                <td>
                                    <Link to={`/booksByAuthor/${author.author}`}
                                    className="btn btn-info">Books</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
