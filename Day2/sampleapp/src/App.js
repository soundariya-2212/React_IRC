import './Assets/CSS/style.css'
import Nav from "./Components/Nav.js"
function App()
{
    return(
        <div class="soundariya">
        <Nav/>
         <form class="container">
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