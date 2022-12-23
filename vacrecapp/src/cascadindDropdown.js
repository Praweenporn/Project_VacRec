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
            ประเภทวัคซีน &nbsp;
            <select onChange={(e) => { setselectedCategory(e.target.value)}}>
                {
                    cateVac.map(state => {
                        return <option>{state}</option>
                    })
                }
            </select>
            &nbsp;
            ชื่อวัคซีน
            &nbsp;
            { selectedCategory && 
                <select>
                {
                    nameVac[selectedCategory].map(nameVac=>{
                        return <option>{nameVac}</option>
                    })
                }
                </select>
            }
        </div>
    );
} 

export default Cascading;