function Nav()
{
    return(
        <>
        <div className="navbar">
            <div>
                <ul>
                    <li><a href="/">PARIS</a></li>
                </ul>
            </div>
            <ul className="hi">
               <li><a href="/">HOME</a></li>
               <li><a href="/">PLACES</a></li> 
               <li><a href="/">SERVICES</a></li> 
               <li><a href="/">CONTACT</a></li> 
            </ul>
        </div>
                <div className="mad">
                    <h2>ThE CiTy Of LiGhTS</h2>
                </div>
                <div class="hello">
                    <h2>  Paris is not just a city for lovers
                    but a city to fall in LOVE with.......</h2>
                </div>
                <div class="meow">
                <button class="not">EXPLORE</button>
                </div>
                {/* <div>
                    <p>
                        I love Paris for the million reasons that everybody loves the city.
                    </p>
                    <p>
                        It's an incredibly romantic and beautiful place.
                    </p>
                </div> */}
                
        </>
        
    )
}
export default Nav;