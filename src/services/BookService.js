import axios from "axios";



const Base_Url = "http://localhost:8080/books"


class BookService{
    //Methods to get all books from api

    getAllBooks(){
        return axios.get(Base_Url );
    }

    //Post request and saving book just entered
    saveBook(bookData){
        return axios.post(Base_Url, bookData)
    }

    updateBook(id, bookData){
        return axios.put(`Base_Url/ ${id}`, bookData)
    }
}



export default new BookService()