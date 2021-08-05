import {useState} from 'react'

import Multiselect from 'multiselect-react-dropdown';

function MultiSelect({options}) {
    const [selected, setSelected] = useState([options]);
      

    const seedata = (data)=>{
        console.log(data)
    }
    
   
    return (
        <div className="w- 11/12  rounded-lg">

         
            <Multiselect
                options={options} // Options to display in the dropdown
                 // Preselected value to persist in dropdown
                style={{
                    chips: {
                         'font-size':'20px',
                         'padding':'10px',
                        
                    },
                    multiselectContainer: {
                        color: 'grey',
                        'height': '30px'
                    },
                    searchBox: {
                        border: 'none',
                        'border-bottom': '2px solid blue',
                        'border-radius': '1px',
                        'width':'800px',
                        
                    },
                    
                }}
                displayValue="name"

          

                value={selected}
          

               
               
                labelledBy="Select"

                onSelect={seedata}
                 // Property name to display in the dropdown options

                placeholder="Choisir type de votre site"
            />

            <br />     <br />     <br />     <br />     <br />     <br />

          
      
            
        </div>
    )
}

export default MultiSelect
