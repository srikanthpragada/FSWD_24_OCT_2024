import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { useParams } from "react-router-dom";
import { BOOKS_URL } from './constants';

export default function BookDetails() {
    let { bookId } = useParams();
    const [book, setBook] = useState({ title: "", author: "", price: "" })

    useEffect(() => {
        $.ajax(
            {
                url: `${BOOKS_URL}/${bookId}`,
                method: 'get',
                success: (book) => setBook(book),
                error: function (error) {
                    setBook(null)
                }
            }
        )
    }, [bookId])

    return (
        <>
            {book ?
                <>
                    <h3>Details of Book </h3>
                    <table className="table">
                        <tr>
                            <td className="bg-info">
                                Title
                            </td>
                            <td>{book.title}</td>
                        </tr>
                        <tr>
                            <td className="bg-info">
                                Author
                            </td>
                            <td>{book.author}</td>
                        </tr>
                        <tr>
                            <td className="bg-info">
                                Price
                            </td>
                            <td>{book.price}</td>
                        </tr>
                    </table>
                </>
                : <h3>Sorry! Book Id Not Found!</h3>
            }
        </>
    )
}
