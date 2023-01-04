
import {Link} from "react-router-dom"

export default function Header(){
    return(
        <>
        <header>
            <nav className='nav navbar-expand-md navbar-dark  p-3'>
                <div>
                    < Link to={"/"} className="navbar-brand m-5" href="#">Book Management Stystem</Link>
                </div>
            </nav>
        </header>
           
        </>
    )
}