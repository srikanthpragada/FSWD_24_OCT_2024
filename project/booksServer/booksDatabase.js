var mysql = require('mysql2/promise');

var pool = mysql.createPool({
    connectionLimit: 4,
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "oct24"
});

async function getBooks() {
    var [rows, fields] = await pool.query("select * from books")
    return rows;
}

async function getBooksByAuthor(author) {
    var [rows, fields] = await pool.query("select * from books where author like ?", ['%' + author + '%'])
    return rows;
}

async function getBookById(id) {
    var [rows, fields] = await pool.query("select * from books where id = ?", [id])
    if (rows.length > 0)
        return rows[0]  // Book to be returned 
    else
        return null;  // Indicates book not found 
}

async function searchBooks(title) {
    var [rows, fields] = await pool.query
         ("select * from books where upper(title) like ?",
        [`%${title.toUpperCase()}%`])
    return rows;
}

async function addBook(title, author, price) {
    let book = await pool.execute("insert into books(title, author, price) values(?,?,?)", [title, author, price])
    return book
}

async function updateBook(id, book) {
    let [result, fields] = await pool.execute("update books set title = ?, author = ?, price = ? where id = ?",
                                          [book.title, book.author, book.price, id])
    //console.log(result)
    if (result.affectedRows === 1)
        return true
    else
        return false
}

async function deleteBook(id) {

    let result = await pool.execute("delete from books where id = ?", [id])
    //console.log(result)
    if (result[0].affectedRows == 1)
        return true;
    else
        return false;

}


async function getAuthorsBooksCount() {
    var [rows, fields] = await pool.query("select author, count(*) as bookCount from books group by author order by author")
    return rows;
}


module.exports = {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
    searchBooks,
    getAuthorsBooksCount,
    getBooksByAuthor
}
