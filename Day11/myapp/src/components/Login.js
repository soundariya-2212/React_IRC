import React from 'react';
import '../assets/Form.css'
import {Toaster,toast} from 'react-hot-toast';
import {useRef,useState} from 'react';
function Form()
{
    const username=useRef(null)
    // const password=useRef(null)
    const [errors,setErrors]=useState({
        username:'',
        // password:'',
        
    })
    const Login=(e)=>{
        e.preventDefault();
        const data={
            username:username.current.value,
            // password:password.current.value,
           
        }
        console.log(data.username.length)
        // console.log(data.password.length)
       

        if(data.username.length===0)
        {
            setErrors((prevErrors)=>({...prevErrors,username:'username is empty !'}));
        }
        else if(data.username.length<6)
        {
            setErrors((prevErrors)=>({...prevErrors,username:'minimum 6 chars'}));
        }
        else
        {
            setErrors((prevErrors)=>({...prevErrors,username:''}));
            if(data.username==="soundariya" && data.password==='123456')
            {
                console.log(data.username);
                toast.success('Successfully toasted!')
            }
        }
        // if(data.password.length===0)
        // {
        //     setErrors((prevErrors)=>({...prevErrors,password:'Password should not be empty!'}));
        // }
        // else if(data.password.length<6)
        // {
        //     setErrors((prevErrors)=>({...prevErrors,password:'Enter a strong Password.'}));
        // }
        // else
        // {
        //     setErrors((prevErrors)=>({...prevErrors,password:''}));
        // }
        
        username.current.value=''
        // password.current.value=''


        // let x=document.getElementById()
    }
    return(
        <div>
            <form className="container" onSubmit={Login}>
                <h1>Login</h1>
                <input type="text" id="username" className="mad" placeholder="Username" ref={username}/>
                {
                    errors.username===''?
                    '':
                    <span className='error-comp'>
                        {errors.username}
                    </span>
                }
                <input type="password" id="password" className="mad" placeholder="Password"/>
                {
                    errors.password===''?
                    '':
                    <span className='error-comp'>
                        {errors.password}
                    </span>
                }
                <div className="fun">
                <button className="fir" type="submit">Login</button>
                </div >
            </form>
            <Toaster
            position="bottom-right"
            reverseOrder={false}
            />
        </div>
    )
}
export default Form