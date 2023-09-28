import React,{useState,useEffect} from 'react'
import './Comment.css'
import axios from 'axios'
function Comment(props) {
    const MakeResponsiveImagesFun = ()=>{
        if(props.showmanue === true)
        return{
         display:'none',
        }
      }
      const MakeResponsiveImages = MakeResponsiveImagesFun()
    const [confermorder,setcontermorder] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/getuserorder')
        .then(res=>{
            setcontermorder(res.data.data)
        })
    },[confermorder])
  return (
    <div style={MakeResponsiveImages}>
        <marquee >
      <div className="main-container" >
      <table>
        <tr>
            <th>Name</th>
            <th>Message</th>
        </tr>
        {
            confermorder.map(i=>{
                return(
                    <tr>
                        <td>{i.name}</td>
                        <td>{i.message}</td>
                    </tr>
                )
            })
        }
      </table>
      </div>
        </marquee>
    </div>
  )
}

export default Comment
