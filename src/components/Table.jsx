import React from 'react'
import '../styles/table.css'
function Table({data}) {
  return (
    <div className="table-container">
    <table className="responsive-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Credit</th>
          <th>A/c Balance</th>
          <th>UTR/RRN</th>
          <th>A/c No/UPI</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td data-label="Date">{row.date}</td>
            <td data-label="Credit" style={{color:'#219653'}}>₹{row.credit}</td>
            <td data-label="A/c Balance" style={{color:'#219653'}}>₹{row.acBalance}</td>
            <td data-label="UTR/RRN">{row.utrRrn}</td>
            <td data-label="A/c No/UPI">{row.acNoUpi}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Table