import bg from './img/CoverPage.jpg';
import view from './img/analysis.png'
import './css/bg-effect.css'

function Background() {
    return (
        <div>
        <div className="container">
              
            <img src={bg} alt="bg" className='headerBg' id='headerBg'/>
            
            <div className="positiontext">
            <h1 className='texttitle' id='text'>Vaccine Patient Record</h1>

            <div className='topBtn'>
            <button className='btnV'><span className='astext'>View</span><img className='viewT' src={view} /></button>
            </div>
            
            {/* <img className='viewT' src={view} /> */}
           </div>

            </div>

            <div className='bgBlue'>
                    <div className="textP">ข้อมูลผู้ป่วย</div>

        
            </div>

            </div>
    );
    }

export default Background;

