import '../assets/Css/Login.css';
function Login() {
    return (
        <>
            <div className='login-wrapper'>

                <div class="di-wrapper">
                    <form class="container-wrapper">
                        <h1 class="m-wrapper">LOGIN</h1>
                        <input type="text" name="" id="user" placeholder="Your name" class="mad-wrapper" />
                        <input type="password" name="" id="Password" placeholder="Password" class="mad-wrapper" />
                        <div class="fun-wrapper">
                            <button class="fir-wrapper" type="submit">Login</button>
                        </div >
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;