import React, { useState } from 'react'
import $ from 'jquery'
import { BOOKS_URL } from './constants'

export default function SearchBooks() {
    const [selectedBooks, setSelectedBooks] = useState([])
    const [searchText, setSearchText] = useState()
    const [done, setDone] = useState(false)

    function searchBooks() {
        $.get( BOOKS_URL + `/search?title=${searchText}`,
            (result) => {
                setSelectedBooks(result)
                setDone(true)
            }
        ) // get
    }

    function changeValue(event) {
        setSearchText(event.target.value)
    }

    return (
        <>
            <h3>Search Books</h3>
            Title <input type="text" value={searchText} 
                     onChange={changeValue} />
            <button onClick={searchBooks}>Search</button>
            <p></p>

            {done && selectedBooks.length > 0 ?
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedBooks.map((book) =>
                                <tr key={book.id}>
                                    <td>{book.title} </td>
                                    <td>{book.author}</td>
                                    <td>{book.price}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                : done ? <h5>Sorry!! No books found</h5> : ''
            }

        </>
    )
}
