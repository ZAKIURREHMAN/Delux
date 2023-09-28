import React, { useEffect, useState } from 'react'
import './Userorder.css'
import axios from 'axios'
function Userorder() {
    const [confermorder,setcontermorder] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/getuserorder')
        .then(res=>{
            setcontermorder(res.data.data)
        })
    },[confermorder])
  return (
    <div>
      <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Number</th>
            <th>Model</th>
            <th>Message</th>
            <th>Address</th>
        </tr>
        {
            confermorder.map(i=>{
                return(
                    <tr>
                        <td>{i._id}</td>
                        <td>{i.name}</td>
                        <td>{i.email}</td>
                        <td>{i.number}</td>
                        <td>{i.model}</td>
                        <td>{i.message}</td>
                        <td>{i.address}</td>
                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default Userorder
