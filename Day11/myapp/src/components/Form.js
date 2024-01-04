import React from 'react';
import '../assets/Form.css'
import {useRef,useState} from 'react';
function Form()
{
    const username=useRef(null)
    const password=useRef(null)
    const email=useRef(null)
    const date=useRef(null)
    const age=useRef(null)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const [errors,setErrors]=useState({
        username:'',
        password:'',
        email:'',
        date:'',
        age: '',
    })
    const Login=(e)=>{
        e.preventDefault();
        const data={
            username:username.current.value,
            password:password.current.value,
            email:email.current.value,
            date:date.current.value,
            age:age.current.value,
        }
        console.log(data.username.length)
        console.log(data.password.length)
        console.log(data.email.length)
        console.log(data.date.length);
        console.log(data.age);

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
        }
        if(data.password.length===0)
        {
            setErrors((prevErrors)=>({...prevErrors,password:'Password should not be empty!'}));
        }
        else if(data.password.length<6)
        {
            setErrors((prevErrors)=>({...prevErrors,password:'Enter a strong Password.'}));
        }
        else
        {
            setErrors((prevErrors)=>({...prevErrors,password:''}));
        }
        if(data.email.length===0)
        {
            setErrors((prevErrors)=>({...prevErrors,email:'Email is empty.'}));
        }
        else if(!emailRegex.test(data.email))
        {
            setErrors((prevErrors)=>({...prevErrors,email:'Invalid Email Format.'}));
        }
        else
        {
            setErrors((prevErrors)=>({...prevErrors,email:''}));
        }
        if (data.date.length ===0) 
        {
            setErrors((prevErrors)=>({...prevErrors, date: 'Date is empty.'}));
        }
        else 
        {
            setErrors((prevErrors)=>({...prevErrors, date: ''}));
        }
        if (data.age.length ===' ') {
            setErrors((prevErrors)=>({...prevErrors, age: 'Age is empty.'}));
        } 
        else if (data.age< 18) 
        {
            setErrors((prevErrors)=>({...prevErrors, age: 'You must be 18 or older.'}));
        } 
        else
         {
            setErrors((prevErrors)=>({...prevErrors, age: ''}));
        }
        
        username.current.value=''
        password.current.value=''
        email.current.value=''
        date.current.value=''
        age.current.value=''

        
    }
    return(
        <div>
            <form className="container" onSubmit={Login}>
                <h1>Register</h1>
                <input type="text" id="username" className="mad" placeholder="Username" ref={username}/>
                {
                    errors.username===''?
                    '':
                    <span className='error-comp'>
                        {errors.username}
                    </span>
                }
                <input type="password" id="password" className="mad" ref={password} placeholder="Password"/>
                {
                    errors.password===''?
                    '':
                    <span className='error-comp'>
                        {errors.password}
                    </span>
                }
                <input type="email" id="email" ref={email} className="mad" placeholder="email"/>
                {
                      errors.email===''?
                      '':
                      <span className='error-comp'>
                          {errors.email}
                      </span>
                }
                <input type="date" id="date" className="mad" ref={date} placeholder="Date"/>
                {
                      errors.date===''?
                      '':
                      <span className='error-comp'>
                          {errors.date}
                      </span>
                }
                <input type="number" id="number" className="mad" ref={age}placeholder="Age" min='0'/>
                {
                      errors.age===''?
                      '':
                      <span className='error-comp'>
                          {errors.age}
                      </span>
                }
                {/* <input type="tel" id="Phone" className="mad" ref={phone} placeholder="Phone number"/> */}
                <div className="fun">
                <button className="fir" type="submit">Register</button>
                </div >
            </form>
        </div>
    )
}
export default Form