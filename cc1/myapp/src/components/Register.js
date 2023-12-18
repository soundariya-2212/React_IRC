import '../assets/Css/Register.css';
import {Link} from 'react-router-dom'
function Register()
{
    function fun()
            {
                let y=document.getElementById("Password").value;
                let y1=document.getElementById("ConfirmPassword").value;
                if(y===y1)
                {
                    alert("Password Matched");
                }
                else
                {
                    alert("Password Mismatched");
                }

            }
    return(
        <>
        
        <div className='register-wrapper'>
            <div class="di-wrapper">
        <form class="container-wrapper">
            <h1 class="m-wrapper">Registration Form</h1>
            <input type="text" name="" id="user" placeholder="Your name"class="mad-wrapper"/>
            <input type="password" name="" id="Password" placeholder="Password" class="mad-wrapper"/>
            <input type="password" name="" id="ConfirmPassword" placeholder="Confirm Password" class="mad-wrapper"/>
            <input type="email" name="" id="Email" placeholder="Email" class="mad-wrapper"/>
            <input type="number" name="" id="number"placeholder="Phone" class="mad-wrapper"/>
            {/* <!-- <input type="date" name="" id="date"placeholder="Date" class="mad"> --> */}
            <Link to ="/Login"><button onClick={fun} class="fir-wrapper">submit</button></Link>
            </form>
        </div>
        </div>
        </>
    )
}
export default Register;