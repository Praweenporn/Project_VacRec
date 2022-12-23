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

        if(this.state.act === 0)
        {
            let newVaccine = {
                "name" : name,
                "age" : age 
            }
            VaccineData.push(newVaccine);
        }
        else
        {
            let index = this.state.index;
            VaccineData[index].name =  VaccineData.name;
            VaccineData[index].age =  VaccineData.age;
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
        <h1 style={{
            position: "relative",
            textAlign: "center",
            marginTop: "20px;",
        }}>
            {this.state.title}
        </h1>
        <form ref="myForm">
            <br></br>
            <Cascading/>
            <br />
            <label>Name</label>  &nbsp;
            <input type="text" ref="txtName" placeholder="Enter Name"/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; 
            <label>Age</label> &nbsp;
            <input type="text" ref="txtAge" placeholder="Enter Age"/>
            <button onClick={e => this.handleSubmit(e)}>Add</button>
        
            <br />
        </form>
        <div style={{
               position: "relative",
               textAlign: "center",
        }}>

        <table style={{
            
        }}>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
            {
                VaccineData.map((data, i) =>
                <tr key={i}>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>
                        <button onClick={i => this.handleEdit(i)}>Edit</button>
                       {/*  <button onClick={this.handleEdit(i)}>Edit</button> */}
                    </td>
                    <td>
                        <button onClick={() => this.handleDelete(i)}>Delete</button>
                        {/* <button onClick={this.handleDelete(i)}>Delete</button> */}
                    </td>
                </tr> )
            } 
            
        </table>
        </div>
        </div>
    )
}
}

export default AddVaccine;