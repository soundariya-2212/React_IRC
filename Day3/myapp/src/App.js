import Nav from "./Components/Nav";
import './assets/Css/Nav.css'
import './assets/Css/style.css'
function App() {
  return (
    <div>
      <Nav />
      <div className='cardbox-container'>

        <div class="cardBox">
          <div class="card">
            <div class="h4">Effile Tower</div>

            <div class="content">
              <div class="h3">HoW It Is FaMoUs?</div>
              <p>Paris is known for its gorgeous, imposing monuments. These iconic structures, often an exemplar of a particular era in architecture, are one of the city's instantly recognizable elements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;