
import React, { Component } from "react";
import axios from "axios";

class Data extends Component {
  state = {
    data: [],
  };
  
  getData() {
    axios.get("http://localhost:3004/posts").then((response) => {
      var a = response.data;
      this.setState({ data: a });
      console.log("response:", response);
    });
  }

  componentDidMount() {
    this.getData();
  }

  deleteData(id, e){  
    axios.delete(`http://localhost:3004/posts/${id}`)  
      .then(response => {  
        console.log(response);  
        console.log(response.data);  
      })    
  } 
  
  updateData(id, e){  
    axios.put(`http://localhost:3004/posts/${id}`)  
      .then(response => {  
        console.log(response);  
        console.log(response.data);  
      })    
  }  
  
  render() {
    return (
      <div>
          {this.state.data.map((el) => (
            <div className="d-flex justify-content-around">
             <h3>{el.email} : {el.password}</h3> 
             <button className="btn btn-danger" onClick={(e) => this.deleteData(el.id, e)}>Delete</button>  
             <button className="btn btn-danger" onClick={(e) => this.updateData(el.id, e)}>Update</button> 
            </div>
          ))}
      </div>
    );
  }
}

export default Data;

