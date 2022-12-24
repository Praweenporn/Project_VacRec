import { React , Component } from 'react';
import Cascading from "./cascadindDropdown.js";
import './css/vaccinehistory.css';

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
            <Cascading/>
            <br />
            <label>ประเภทวัคซีน</label>  &nbsp;
            <input type="text" ref="txtName" placeholder="Enter Name"/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; 
            <label>ชื่อวัคซีน</label> &nbsp;
            <input type="text" ref="txtAge" placeholder="Enter Age"/>
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
            <input type="text" ref="txtDoctor" placeholder="Enter Name" style={{
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
            <select ref="txtSource" style={{
                 border: "2px solid #0AA1DD",
                 borderRadius: "8px",
                 fontSize: "16px",
                 height: "25px"
            }}>
                <option value="" selected disabled hidden>เลือกแหล่งที่มา</option>
                <option value="รพ.">รพ.</option>
                <option value="ภายนอกรพ.">ภายนอกรพ.</option>
            </select> &nbsp; &nbsp; &nbsp; &nbsp;
            <br /><br />
            <button onClick={e => this.handleSubmit(e)} style={{
                  border: '3px solid #FFAC52',
                  width: '100%',
                  height: '35px',
                  backgroundColor: '#FFAC52', 
                  borderRadius: '8px',
                  color: 'white',
                  textDecoration: 'none',
                  cursor: 'pointer',
            }}>Add</button>
            </p>
        </form>

        <br />
        <br />
        
        <span>
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
                <th>การกระทำข้อมูล</th>
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
                        }}>แก้ไข</button>
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