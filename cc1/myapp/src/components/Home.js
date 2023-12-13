import image from '../assets/Image/read.jpg';
import '../assets/Css/Home.css';
function Home()
{
    return(
        <>
        <div>
            <img src={image} alt="hello" class="img"/>
        </div> 
            <div class="net">
                <p>BiBlIoPhIlE</p>
            </div>   
            <div class="content">
                    <p>"The more that you read, the more things you will know. The more that you learn, the more places you’ll go...."</p>
            </div>
            <div class="button">
            <button class="but">EXPLORE</button>
            </div>

        </>
        )
}
export default Home;