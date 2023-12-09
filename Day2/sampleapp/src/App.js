import './Assets/CSS/style.css'
function App()
{
    return(
        <div>
         <form class="container" onsubmit="fun()">
            <h1 class="m">Registration Form</h1>
            <input type="text" name="" id="user" placeholder="Your name"class="mad"/>
            <input type="password" name="" id="Password" placeholder="Password" class="mad"/>
            <input type="password" name="" id="ConfirmPassword" placeholder="Confirm Password" class="mad"/>
            <input type="email" name="" id="Email" placeholder="Email" class="mad"/>
            <input type="number" name="" id="number"placeholder="Number" class="mad"/>
            {/* <!-- <input type="date" name="" id="date"placeholder="Date" class="mad"> --> */}
            <button class="fir">submit</button>
            </form>   
        </div>
    )
}
export default App