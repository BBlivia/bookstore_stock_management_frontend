import axios from "axios";



const Base_Url = "http://localhost:8080/books"


class BookService{
    //Methods to get all books from api

    getAllBooks(){
        return axios.get(Base_Url );
    }
}



export default new BookService()