import React, {useState, useEffect} from 'react'
import BookService from '../services/BookService';
import {Link, useNavigate, useParams} from "react-router-dom";

export default function Addbook(){

    //function to collect and store entered inputs


    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState();
    const [edition, setEdition] = useState();

    const navigate = useNavigate();

    const {id} = useParams();

    const bookData = {title, author, price, edition};
    console.log(bookData);

    //saving book and go to home page
    function saveBook(e){
        e.preventDefault();
        if(bookData.title !== "" && bookData.author !== "" && bookData.price !== 0 && bookData.edition !== 0){

            BookService.saveBook(bookData)
        .then(res=>navigate("/books"))
        .catch(e=> console.log(e));
        }else{
            alert("Please fill in all fields")
        }
        
    }

    //updating book with id passed in 

    function tile(){
        if(id){
            return "Update Book Details";
        }else{
            return "Add Book";
        }
    }

    useEffect(()=>{
        if(id){
            BookService.getBookById(id)
            .then(res=>{
                setTitle(res.data.title);
                setAuthor(res.data.author);
                setPrice(res.data.price);
                setEdition(res.data.edition)

            })
            .catch(e => console.log(e));
        }

       
    }, []);



    return(<div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>{tile()}</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>

                                <input className='form-control' 
                                value={title}
                                onChange={(e) =>setTitle(e.target.value)}
                                type="text" placeholder='Enter Title' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                value={author}
                                onChange={(e)=> setAuthor(e.target.value)}
                                type="text" placeholder='Enter Author' />
                            </div>
                            <div className='form-group mb-2'>
                    
                                <input className='form-control' 
                                value={price}
                                onChange={(e)=>setPrice(e.target.value)}
                                type="number" placeholder='Enter Price' />
                            </div>
                            <div className='form-group mb-2'>
                                <input  className='form-control' 
                                value={edition}
                                onChange={(e)=>setEdition(e.target.value)}
                                type="number" placeholder='Enter Edition' />
                            </div>
                            <button onClick={(e)=>saveBook(e)} className='btn save-btn'>Save</button> {" "}
                            <Link to={"/books"} className='btn delete-btn' href="">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    
}