import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";


function Data(){

    const [data,setData]= useState([])
    const getData=()=> {
        axios.get('http://localhost:3004/posts').then((response) => {

            setData( response.data);
            console.log("response:", response);
          });
    }
    useEffect(()=>{getData()},[])

    const deleteData=(e,id)=> {
      axios.delete(`http://localhost:3004/posts/${id}`)
      .then(response => {
          console.log(response);
        })
      .catch(err=> 
        console.log(err)
      );
    } 
  return (

<div>
          {data.map((el) => (
            <div className="d-flex justify-content-around">
             <h3>{el.email} : {el.password}</h3> 
             <button className="btn btn-danger" onClick={(e) => deleteData(e,el.id)}>Delete</button>  
             <button className="btn btn-danger">Update</button> 
            </div>
          ))}
      </div>

       


       
  
   )

 }

export default Data