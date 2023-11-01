import React from 'react';

function DummyTable() {
    return (
      <div 
        style={{
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center',  
          alignItems: 'center' 
        }}>
        <h1>Dummy Table</h1>
        <table>
          <tbody> 
            <tr>
              <td>Dummy</td>
              <td>Table</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
export default DummyTable;