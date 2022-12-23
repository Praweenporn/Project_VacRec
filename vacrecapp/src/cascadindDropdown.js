import { useState } from 'react';

function Cascading() {
    const cateVac = ['วัคซีนไข้หวัดใหญ่','วัคซีนโรคอีสุกอีใส','วัคซีนโรคไข้สมองอักเสบ','วัคซีนไวรัสตับอักเสบ บี','วัคซีนโรคไอพีดี','วัคซีนโควิด']
    const nameVac = {
        'วัคซีนไข้หวัดใหญ่': ['Afluria','Fluarix Tetra', ' Fluzone', 'Vaxigrip Tetra'],
        'วัคซีนโรคอีสุกอีใส': ['Varivax','Varilrix'],
        'วัคซีนโรคไข้สมองอักเสบ': ['Ixiaro','Imojev'],
        'วัคซีนไวรัสตับอักเสบ บี': ['Recombivax HB','Engerix-B','Heplisav-B'],
        'วัคซีนโรคไอพีดี': ['PCV10','PCV13'],
        'วัคซีนโควิด': ['Pfizer-BioNTech','Moderna','Sputnik V','AstraZeneca','Sinovac','Sinopharm']
    }

    const [selectedCategory, setselectedCategory] = useState('')
    console.log(selectedCategory)

    return (
        <div>
            <label>ประเภทวัคซีน</label> &nbsp;
            <select onChange={(e) => { setselectedCategory(e.target.value)}} style={{
                border: "2px solid #0AA1DD",
                borderRadius: "8px",
                fontSize: "16px",
                height: "30px"
            }}>
                {
                    cateVac.map(state => {
                        return <option>{state}</option>
                    })
                }
            </select>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; 
            <label>ชื่อวัคซีน</label>
            &nbsp;
            { selectedCategory && 
                <select style={{
                    border: "2px solid #0AA1DD",
                    borderRadius: "8px",
                    fontSize: "16px",
                    height: "30px"
                }}>
                {
                    nameVac[selectedCategory].map(nameVac=>{
                        return <option>{nameVac}</option>
                    })
                }
                </select>
            }
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; 
             <label>Dose No.</label> &nbsp;
            <input
                type="number"
                min="1"
                max="99" 
                style={{
                    border: "2px solid #0AA1DD",
                    borderRadius: "8px",
                    fontSize: "16px",
                    height: "23px"
                }}
            />
            <br /><br />
            <p>
            <label>แพทย์ผู้สั่ง</label>   &nbsp;
            <input type="text" placeholder="Enter Name" style={{
                 border: "2px solid #0AA1DD",
                 borderRadius: "8px",
                 fontSize: "16px",
                 height: "23px"
            }}/>

            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; 
            <label>วันที่ให้วัคซีน</label>
            &nbsp;
            <input type="date" style={{
                 border: "2px solid #0AA1DD",
                 borderRadius: "8px",
                 fontSize: "16px",
                 height: "25px"
            }}></input>

            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; 
            <label>วันที่ให้วัคซีนครั้งถัดไป</label>
            &nbsp;
            <input type="date" style={{
                 border: "2px solid #0AA1DD",
                 borderRadius: "8px",
                 fontSize: "16px",
                 height: "25px"
            }}></input>
            </p>

            <br />
            <p>
            <label>รับวัคซีนจาก</label>   &nbsp;
            <select name="" id="" style={{
                 border: "2px solid #0AA1DD",
                 borderRadius: "8px",
                 fontSize: "16px",
                 height: "25px"
            }}>
                <option value="">รพ.</option>
                <option value="">ภายนอกรพ.</option>
            </select>
            </p>
        </div>
    );
} 

export default Cascading;