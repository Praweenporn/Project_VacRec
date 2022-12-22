import bg from './img/CoverPage.jpg';
import './css/bg-effect.css'

function Background() {
    return (
        <div className="container">
                {/*      <div className="header"> */}
                <img src={bg} alt="bg" className='headerBg' id='headerBg'/>
            
            <div className="positiontext">
            <h1 className='texttitle' id='text'>Vaccine Patient Record</h1>
            <section>
            <p>
               
               </p>
            </section>
            </div>
            </div>
    );
    }

export default Background;

