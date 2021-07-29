import React from "react";

function ListTable({ detailed, roster }) {
  const rows = roster.map(({id, firstName, lastName, location}) => {
      return(
          <tr key={id}>
              <td>{id}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{location}</td>
          </tr>
      )
  })
  
  const list = roster.map(({id, firstName}) => {
    return <li key={id}>{firstName}</li>
    })
  
  if (detailed) {
      return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
          )
  } else {
      return <ol>{list}</ol>
  }
    
}
    

export default ListTable;
