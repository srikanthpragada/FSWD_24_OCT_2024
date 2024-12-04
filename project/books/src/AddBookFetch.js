import React, { useState } from 'react'
import $ from 'jquery'
import { BOOKS_URL } from './constants'
import { useNavigate } from 'react-router-dom'

export default function AddBookFetch() {
  let [book, setBook] = useState({ title: "", author: "", price: 0 })
  let navigate = useNavigate()

  async function addBook(event) {

    event.preventDefault()

    // make ajax request for post 
    let response = await fetch(BOOKS_URL, 
      {
       method: 'post',
       body: JSON.stringify(book),
       headers: {
          "Content-Type": "application/json"
       }
    })

    if (response.ok) 
      alert("Book Added Successfully!")
    else
      alert("Sorry! Error : " +  response.statusText )
  }

  function changeValue(event) {
    var name = event.target.name;
    var value = event.target.value;
    setBook({ ...book, [name]: value })
  }

  function cancelAdd(e) {
    e.preventDefault()
    navigate("/list")  // Programmatic Navigation

  }


  return (
    <>
      <h3>Add New Book</h3>

      <form onSubmit={addBook}>
        <div className="form-group">
          <label for="txtTitle">Title </label>
          <input className="form-control" type="text" value={book.title} id="txtTitle" required onChange={changeValue} name="title" />
        </div>

        <div className="form-group">
          <label for="txtAuthor">Author</label>
          <input id="txtAuthor" className="form-control" type="text" value={book.author} required onChange={changeValue} name="author" />
        </div>

        <div className="form-group">
          <label for="txtPrice">Price</label>
          <input id="txtPrice" className="form-control" type="number" value={book.price} onChange={changeValue} name="price" />
        </div>
        <p></p>
        <button className="btn btn-primary">Add Book</button>
        &nbsp;
        <button className="btn btn-danger" onClick={cancelAdd}>Cancel</button>
      </form>
    </>
  )
}
