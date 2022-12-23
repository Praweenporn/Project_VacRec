import bg from './img/CoverPage.jpg';
import view from './img/analysis.png'
import './css/bg-effect.css'

/* var __html = require('./html/datatables.html');
 */

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
              {/*   <table id="example" class="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>
                </tbody>
                </table>  */}
                </p>
                
                <br></br>
                <br></br>
            </div>

            </div>
    );
    }

export default Background;

