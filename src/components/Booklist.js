import axios from "axios";
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import BookService from "../services/BookService";






export default function Booklist(){
    const[bookArray, setBookArray] = useState([]);
    useEffect(()=>{
        getAllBooks();
    },[]);

    function getAllBooks(){
        BookService.getAllBooks()
        .then(res=> {setBookArray(res.data); console.log(res) })
        .catch(e => console.log(e))
    }

    return(
    <div className='container'>
    <Link  to={"/addbook"}className='btn btn-primary mb-2 mt-3'>Add Book</Link>
    <h2 className='text-center mb-4'>All Books</h2>
    <table className='table table-bordered table striped'>
        <thead>
           <tr>
            <th>ID</th>
            
            <th> Title</th>
            <th> Author</th>
            <th>Price</th>
            <th>Edition</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {bookArray.map(book => <tr 
            key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>{book.edition}</td>
                <td>
                    <a className="btn bg-primary btn-update">Update</a> {" "}
                    <a className="btn btn-danger btn-delete">Delete</a> 
                </td>
            </tr>)}

        </tbody>
    </table>
</div>
)
}
