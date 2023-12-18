import '../assets/Css/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {Link} from 'react-router-dom';
function Login() {
    function fun(event)
            {
                event.preventDefault();
                let y=document.getElementById("Password").value;
                let x="1234";
           
                if(y===x)
                {
                        // alert("Password Matched");
                        toast.success(' Login Successful!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
                }
                else
                {
                    // alert("Password Mismatched");
                    toast.error('Login failed', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });

                }

        }
    
    return (
        <>
            <div className='login-wrapper'>

                <div class="di-wrapper">
                    <form class="container-wrapper">
                        <h1 class="m-wrapper">LOGIN</h1>
                        <input type="text" name="" id="user" placeholder="Your name" class="mad-wrapper" required />
                        <input type="password" name="" id="Password" placeholder="Password" class="mad-wrapper" required/>
                        <div class="fun-wrapper">
                        <button onClick={fun}class="fir-wrapper" type="submit">Login</button>
                        </div >
                    </form>
                </div>
            </div>
        <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        </>
    )
}
export default Login;