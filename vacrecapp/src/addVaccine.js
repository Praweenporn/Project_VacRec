import { React , Component } from 'react';
import Cascading from "./cascadindDropdown.js";
import './css/vaccinehistory.css';

import h from './img/h.png'
import eh from './img/eh.png'

class AddVaccine extends Component{
    constructor(){
        super();
        this.state={
            title : "ข้อมูลการรับวัคซีนของผู้ป่วย",
            VaccineData : [],
            act : 0,
            index : ''
        }
    }

    handleSubmit= (e) => {
        e.preventDefault();
        let VaccineData = this.state.VaccineData;
        let name = this.refs.txtName.value;
        let age = this.refs.txtAge.value;
        let dose = this.refs.txtDose.value;
        let doctor = this.refs.txtDoctor.value;
        let dateGive = this.refs.txtDateGive.value;
        let dateNext = this.refs.txtDateNext.value;
        let source  = this.refs.txtSource .value;

        if(this.state.act === 0)
        {
            let newVaccine = {
                "name" : name,
                "age" : age,
                "dose" : dose,
                "doctor" : doctor,
                "dateGive" : dateGive,
                "dateNext" : dateNext,
                "source" : source 
            }
            VaccineData.push(newVaccine);
        }
        else
        {
            let index = this.state.index;
            VaccineData[index].name =  VaccineData.name;
            VaccineData[index].age =  VaccineData.age;
            VaccineData[index].dose =  VaccineData.dose;
            VaccineData[index].doctor =  VaccineData.doctor;
            VaccineData[index].dateGive =  VaccineData.dateGive;
            VaccineData[index].dateNext =  VaccineData.dateNext;
            VaccineData[index].source =  VaccineData.source;
        }

        this.setState({
            VaccineData : VaccineData,
            act : 0 
        })

        this.refs.myForm.reset();
    }

    handleEdit= (i) =>{
        let VaccineData = this.state.VaccineData[i];
        this.refs.txtName.value = VaccineData.name;
        this.refs.txtAge.value = VaccineData.age;
        this.refs.txtDose.value = VaccineData.dose;
        this.refs.txtDoctor.value = VaccineData.doctor;
        this.refs.txtDateGive.value = VaccineData.dateGive;
        this.refs.txtDateNext.value = VaccineData.dateNext;
        this.refs.txtSource.value = VaccineData.source;
        this.setState({
            VaccineData : VaccineData,
            act : 1,
            index : i
        });
    }

    handleDelete= (i) =>{
        let VaccineData = this.state.VaccineData;
        VaccineData.splice(i,1);
        this.setState({
            VaccineData : VaccineData
        });
    } 

render(){

    let VaccineData = this.state.VaccineData;

    return(
        <div className='container' style={{
            position: "relative",
            textAlign: "center",
            marginTop: "30px",
        }}>

        <form ref="myForm">
            <br></br>
        {/* การทำ cascadind Dropdown หรือ Auto complete อยู่ในไฟล์ cascadindDropdown.js ยังไม่เสร็จสิ้น*/}

            <label>ประเภทวัคซีน</label>  &nbsp;
            {/* <input type="text" ref="txtName" placeholder="Enter Name"/> */}
            <select ref="txtName" style={{
                 border: "2px solid #0AA1DD",
                 borderRadius: "8px",
                 fontSize: "16px",
                 height: "28px"
            }}>
                <option value="" selected disabled hidden>เลือกประเภท</option>
                <option value="วัคซีนไข้หวัดใหญ่" style={{
                    color: '#EB455F',
                }}>วัคซีนไข้หวัดใหญ่</option>
                <option value="วัคซีนโรคอีสุกอีใส" style={{
                    color: '#227C70',
                }}>วัคซีนโรคอีสุกอีใส</option>
                <option value="วัคซีนโรคไข้สมองอักเสบ" style={{
                    color: '#A555EC',
                }}>วัคซีนโรคไข้สมองอักเสบ</option>
                <option value="วัคซีนไวรัสตับอักเสบ บี" style={{
                    color: '#FF7000',
                }}>วัคซีนไวรัสตับอักเสบ บี</option>
                <option value="วัคซีนโรคไอพีดี" style={{
                    color: '#FFBF00',
                }}>วัคซีนโรคไอพีดี</option>
                <option value="วัคซีนโควิด" style={{
                    color: '#00ABB3',
                }}>วัคซีนโควิด</option>
            </select> &nbsp; &nbsp; &nbsp; &nbsp;

            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; 
            <label>ชื่อวัคซีน</label> &nbsp;
           {/*  <input type="text" ref="txtAge" placeholder="Enter Age"/> */}
            <select ref="txtAge" style={{
                 border: "2px solid #0AA1DD",
                 borderRadius: "8px",
                 fontSize: "16px",
                 height: "28px"
            }}>
                <option value="" selected disabled hidden>เลือกวัคซีน</option>
                <option value="Afluria" style={{
                      color: '#EB455F',
                }}>Afluria</option>
                <option value="Fluarix Tetra" style={{
                      color: '#EB455F',
                }}>Fluarix Tetra</option>
                <option value="Fluzone" style={{
                     color: '#EB455F',
                }}>Fluzone</option>
                <option value="Vaxigrip Tetra" style={{
                     color: '#EB455F',
                }}>Vaxigrip Tetra</option>

                <option value="Varivax" style={{
                    color: '#227C70',
                }}>Varivax</option>
                <option value="Varilrix" style={{
                     color: '#227C70',
                }}>Varilrix</option>

                <option value="Ixiaro" style={{
                    color: '#A555EC',
                }}>Ixiaro</option>
                <option value="Imojev" style={{
                    color: '#A555EC',
                }}>Imojev</option>

                <option value="Recombivax HB" style={{
                    color: '#FF7000',
                }}>Recombivax HB</option>
                <option value="Engerix-B" style={{
                    color: '#FF7000',
                }}>Engerix-B</option>
                <option value="Heplisav-B" style={{
                    color: '#FF7000',
                }}>Heplisav-B</option>

                <option value="PCV10" style={{
                    color: '#FFBF00',
                }}>PCV10</option>
                <option value="PCV13" style={{
                    color: '#FFBF00',
                }}>PCV13</option>

                <option value="Pfizer-BioNTech" style={{
                    color: '#00ABB3',
                }}>Pfizer-BioNTech</option>
                <option value="Moderna" style={{
                    color: '#00ABB3',
                }}>Moderna</option>
                <option value="Sputnik V" style={{
                    color: '#00ABB3',
                }}>Sputnik V</option>
                <option value="AstraZeneca" style={{
                    color: '#00ABB3',
                }}>AstraZeneca</option>
                <option value="Sinovac" style={{
                    color: '#00ABB3',
                }}>Sinovac</option>
                <option value="Sinopharm" style={{
                    color: '#00ABB3',
                }}>Sinopharm</option>

            </select> &nbsp; &nbsp; &nbsp; &nbsp;
            
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; 
            <label>Dose No.</label>  &nbsp;
            <input type="number" min="1" ref="txtDose" placeholder="กรอก Dose No." style={{
                    border: "2px solid #0AA1DD",
                    borderRadius: "8px",
                    fontSize: "16px",
                    height: "23px"
                }}></input>
            
            <p>
            <label>แพทย์ผู้สั่ง</label>  &nbsp;
            <input type="text" ref="txtDoctor" placeholder="กรอกชื่อ-นามสกุล" style={{
                 border: "2px solid #0AA1DD",
                 borderRadius: "8px",
                 fontSize: "16px",
                 height: "23px"
            }}></input>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; 
            <label>วันที่ให้วัคซีน</label> &nbsp;
            <input type="date" ref="txtDateGive" placeholder="Enter Age" style={{
                 border: "2px solid #0AA1DD",
                 borderRadius: "8px",
                 fontSize: "16px",
                 height: "25px"
            }}></input>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; 
            <label>วันที่ให้วัคซีนครั้งถัดไป</label>  &nbsp;
            <input type="date" ref="txtDateNext" placeholder="Enter Name" style={{
                 border: "2px solid #0AA1DD",
                 borderRadius: "8px",
                 fontSize: "16px",
                 height: "25px"
            }}></input>
            </p>

            <p>
            <label>รับวัคซีนจาก</label>  &nbsp;
           {/*  <input type="text" ref="txtSource" placeholder="Enter Name"/> */}
            <select ref="txtSource" id="sv" style={{
                 border: "2px solid #0AA1DD",
                 borderRadius: "8px",
                 fontSize: "16px",
                 height: "28px"
            }}>
                <option value="" selected disabled hidden>เลือกแหล่งที่มา</option>
                <option value="รพ." >รพ.</option>
                <option value="ภายนอกรพ.">ภายนอกรพ.</option>
            </select> &nbsp; &nbsp; &nbsp; &nbsp;
            <br /><br />
            <button onClick={e => this.handleSubmit(e)} style={{
                  fontSize: '16px',
                  textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
                  border: '3px solid #FFAC52',
                  width: '100%',
                  height: '35px',
                  backgroundColor: '#FFAC52', 
                  borderRadius: '8px',
                  color: 'white',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  boxShadow: '-1px 6px 4px rgba(0, 0, 0, 0.25)',
            }}>เพิ่ม</button>
            </p>
        </form>

        <br />
        <span>
            <h3>ประวัติการรับวัคซีน</h3>
        <table>
            <thead>
            <tr>
                <th>ประเภทวัคซีน</th>
                <th>ชื่อวัคซีน</th>
                <th>Dose No.</th>
                <th>แพทย์ผู้สั่ง</th>
                <th>วันที่ให้วัคซีน</th>
                <th>วันที่ให้วัคซีนครั้งถัดไป</th>
                <th>รับวัคซีนจาก</th>
                <th>การเปลี่ยนแปลงข้อมูล</th>
            </tr>
            </thead>
            {
                VaccineData.map((data, i) =>
                <tr key={i}>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.dose}</td>
                    <td>{data.doctor}</td>
                    <td>{data.dateGive}</td>
                    <td>{data.dateNext}</td>
                    <td>{data.source}</td>
                    <td>
                        <button onClick={i => this.handleEdit(i)} style={{
                            border: '3px solid #2A3990',
                            height: '35px',
                            backgroundColor: '#2A3990', 
                            borderRadius: '8px',
                            color: 'white',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}>แก้ไข</button> {/* ยังไม่เสร็จสิ้น */}
                        &nbsp;
                        <button onClick={() => this.handleDelete(i)} style={{
                             border: '3px solid #EB455F',
                             height: '35px',
                             backgroundColor: '#EB455F', 
                             borderRadius: '8px',
                             color: 'white',
                             textDecoration: 'none',
                             cursor: 'pointer',
                        }}>ลบ</button>
                       {/*  <button onClick={this.handleEdit(i)}>Edit</button> */}
                    </td>
                 {/*    <td>
                        <button onClick={() => this.handleDelete(i)}>Delete</button>
                    </td> */}
                </tr> )
            } 
        </table>
        </span>

        <br /><br />
        </div>
    )
}
}

export default AddVaccine;