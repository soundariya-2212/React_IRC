import '../assets/Css/Register.css';
function Register()
{
    return(
        <>
        
        <div className='register-wrapper'>
            <div class="di-wrapper">
        <form class="container-wrapper" onsubmit="fun()">
            <h1 class="m-wrapper">Registration Form</h1>
            <input type="text" name="" id="user" placeholder="Your name"class="mad-wrapper"/>
            <input type="password" name="" id="Password" placeholder="Password" class="mad-wrapper"/>
            <input type="password" name="" id="ConfirmPassword" placeholder="Confirm Password" class="mad-wrapper"/>
            <input type="email" name="" id="Email" placeholder="Email" class="mad-wrapper"/>
            <input type="number" name="" id="number"placeholder="Phone" class="mad-wrapper"/>
            {/* <!-- <input type="date" name="" id="date"placeholder="Date" class="mad"> --> */}
            <button class="fir-wrapper">submit</button>
            </form>
        </div>
        </div>
        </>
    )
}
export default Register;