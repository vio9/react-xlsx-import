import * as XLSX from 'xlsx';
import { useState, useEffect } from 'react';

function FileInput(){
   const [data, setData] = useState([]);

const fetchData = async (e) => {
    try{
        const file = e.target.files[0];
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data, { type: 'array'});
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
    
        const excelJson = XLSX.utils.sheet_to_json(worksheet, { header:1})
        setData(excelJson)
        console.log(excelJson);
    } catch(error){
        console.log(error)
    }

}

    return(
        <div>
            <input type='file' onChange={fetchData} />
            {
                data && (
                    <div>
                        <h2>Imported Data:</h2>
                      
                    </div>
                )
            }
        </div>
    )
}

export default FileInput ; 