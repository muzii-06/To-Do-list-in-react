import React, { useState } from 'react'
import SingleTodo from './SingleTodo';

const Todo = () => {
    const[todo,setTodo]=useState("");
    const[data,setData]=useState([]);
    const[error,setError]=useState(false);
    const[success,setSuccess]=useState(false);
    const handleClick =(e)=>
    {

        e.preventDefault();
        if(!todo)
        {
            setError(true);
            setSuccess(false);
        }
        else{
            setError(false);
            setSuccess(true);
            setTodo("");
            setData([...data,{todo,date:Date.now()}])
        }
    };
  return (
    <>
        <div className="col-lg-4 container mx-auto  p-5 shadow rounded-4">
            <h1 className="display-5 text-center">Todo List</h1>
            <form action="">
            <label htmlFor="">Todo</label>
            <input className='form-control' type="text" placeholder='Enter to do list' value={todo} onChange={(e)=>setTodo(e.target.value)} />
            {error &&  (<p className='text-danger fw-bold ms-0'>Please enter to do</p>)}
            {success &&  (<p className='text-success fw-bold ms-0'>Data added Successfully</p>)}
            <button onClick={handleClick} className="btn  my-2 w-100 btn-warning">
                Add to List
            </button>

            </form>
                    </div>
            <div className="container  rounded-2 p-5 my-1 shadow">
                <div className="row">


                {data?.map((item,index)=>
                {
                    return <SingleTodo key={index} {...item}  />;
                })}
                </div>
            </div> 
    </>
  )
}

export default Todo;