
import {Link} from "react-router-dom"


export default function Booklist(){
    return(
    <div className='container'>
    <Link  to={"/addbook"}className='btn btn-primary mb-2 mt-3'>Add Book</Link>
    <h2 className='text-center mb-4'>All Books</h2>
    <table className='table table-bordered table striped'>
        <thead>
            <th> ID</th>
            <th> Title</th>
            <th> Author</th>
            <th>Price</th>
            <th>Edition</th>
        </thead>
        <tbody>

        </tbody>
    </table>
</div>
)
}