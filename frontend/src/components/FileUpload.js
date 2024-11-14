// File: frontend/src/components/FileUpload.js
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function FileUpload() {
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const binaryStr = event.target.result;
        const workbook = XLSX.read(binaryStr, { type: 'binary' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        
        // Map the sheet data to desired format (Assuming Name, Age, and Grade are in each row)
        const formattedData = sheetData.map(row => ({
          name: row[0],
          age: row[1],
          grade: row[2],
        }));
        
        setData(formattedData);
        setMessage('Successfully uploaded');
      };
      reader.readAsBinaryString(selectedFile);
    }
  };

  return (
    <div className="container mt-4">
      <h3>BULK UPLOAD</h3>
      <label>Upload an XLS File</label>
      <input
        type="file"
        accept=".xls,.xlsx"
        onChange={handleFileChange}
        style={{ display: 'block', margin: '10px 0' }}
      />
      <button
        className="btn btn-primary"
        onClick={() => alert(message)}
        disabled={!message}
      >
        Upload
      </button>
      {message && <p>{message}</p>}
      
      {data.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h4>Uploaded Data FROM the system</h4>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                {item.name} - Age: {item.age}, Grade: {item.grade}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
