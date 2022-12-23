import { React , Component } from 'react';

class AddVaccine extends Component{
    constructor(){
        super();
        this.state={
            VaccineData : []
        }
    }

render(){
    return(
        <form ref="VaccineForm">
            <label>Name</label>
            <input type="text" ref="txtName" placeholder="Enter Name"/>
            <label>Age</label>
            <input type="text" ref="txtAge" placeholder="Enter Age"/>
            <button>Add</button>
        </form>
    )
}
}

export default AddVaccine;