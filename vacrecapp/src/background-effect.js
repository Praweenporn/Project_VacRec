import bg from './img/CoverPage.jpg';
import view from './img/analysis.png'
import './css/bg-effect.css'

import VaccineHistory from './vaccineHistory.js';

function Background() {
    return (
        <div>
        <div className="container">
              
            <img src={bg} alt="bg" className='headerBg' id='headerBg'/>
            
            <div className="positiontext">
            <h1 className='texttitle' id='text'>Vaccine Patient Record</h1>

           {/*  <div className='topBtn'>
            <button className='btnV'><span className='astext'>View</span><img className='viewT' src={view} /></button>
            </div>
 */}
           </div>
            </div>

            <div className='bgBlue'>
                <div className="textP">ข้อมูลผู้ป่วย</div>
                <br></br>
                <p>
                    <iframe className='datatable' src="./datatables.html"></iframe>
                </p>

                <br></br>
                <br></br>

                <div className="textV">ข้อมูลการรับวัคซีนของผู้ป่วย</div>
                <div className='bgW'>
                    <div className='spacelr'>
                        <VaccineHistory/>
                    </div>
                </div>
             
            </div>

            </div>
    );
    }
    
export default Background;

