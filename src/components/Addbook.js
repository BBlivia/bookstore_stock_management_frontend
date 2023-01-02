export default function Addbook(){
    return(<div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>Add Book</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="text" placeholder='Enter Title' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="text" placeholder='Enter Author' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="email" placeholder='Enter Price' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="email" placeholder='Enter Edition' />
                            </div>
                            <button className='btn save-btn'>Save</button> {" "}
                            <a className='btn delete-btn' href="">Cancel</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    
}