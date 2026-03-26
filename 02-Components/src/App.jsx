import './App.css';
import Navbar from './components/Navbar';
import dankrishu from "./assets/dankrishu.png";
import bauaa from "./assets/baaua.jpg";
import Jaiyaxh from "./assets/jaiyaxh.jpg";
import aru from "./assets/aru.jpg";
import bala from "./assets/bala.png";
import surya from "./assets/suryabhai.png";

function App() {
  return (
    <>
    <Navbar/>
    <div className="card-container">
      <div className="card">
        <img
          className="card-image"
          src={dankrishu} alt="card"/>
        <h2 className="card-title">DAINIK RISHU</h2>
        <p className="card-description">
          CIB Agent - Crazy Indian Bundbaj.
        </p>
        <p>
          Body Count was invented in 1951. Peopel before that "What was her number ?
          Ye Landge hamesha KFC me leg-piece order karte hai
        </p>

        <button className="card-button">Read More</button>
        </div>
        </div>
        <div className="Friends"> 
         <div className="baaua">
        <h1>Bauaa - The Chut Chatoorika! </h1>
        <img src={bauaa} alt=""></img>
        <p> Kunali Ka Prime Supporter, Gothic Madam Ki chaat ne wala</p>
        <button>His Bio </button>
         </div>
        <div className="jayesh">
        <h1>Jaiyaxh - The Sasta Foreiner</h1>
        <img src={Jaiyaxh} alt="" />
        <p> The Jee Main + Cbse Performance Analyst</p>
        <button>His Bio</button>
        </div>
        <div className="bala">
        <h1>Arpit Bala - The Galeech Singer</h1>
        <img src={bala} alt="" />
        <p> Naughty Ho raha Hai BKL!</p>
        <button>His Bio</button>
        </div>
        <div className="aru">
        <h1>Aru - The Gooner</h1>
        <img src={aru} alt="" />
        <p> Ajeeb si Self Acting wala, bencho Headphone lagake Khud ho primeminister Samjta hai</p>
        <button>His Bio</button>
        </div>
        <div className="surya">
        <h1>Surya - The Mommy Hooker</h1>
        <img src={surya} alt="" />
        <p> Teri mummy meri hoja! Wingadium Labiousa</p>
        <button>His Bio</button>
        </div>
        </div>
    
    </>
  );
}

export default App;
