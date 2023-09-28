import React, { useEffect, useState } from 'react'
import './Admin.css'
import axios from 'axios'
function Admin() {
    const [userdata, setuserdata] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/getdata')
            .then((data) => {
                setuserdata(data.data.data)
            })
    }, [userdata])
    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Password</th>
                    <th>Date</th>
                </tr>
                {
                    userdata.map(i => {
                        return (
                                <tr>
                                    <td>
                                        {i._id}
                                    </td>
                                    <td>
                                        {i.name}
                                    </td>
                                    <td>
                                        {i.email}
                                    </td>
                                    <td>
                                        {i.password}
                                    </td>
                                    <td>
                                        {i.date}
                                    </td>
                                </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Admin
