import { useState } from "react";

function Forms(){
    // let data=[]
    const [name, setName]=useState("");
    const [data, setData]=useState([]);
    const [number, setNumber]=useState("");
    const [email, setEmail]=useState("");
    function handleSubmit(e){
        e.preventDefault();
        setData([...data,{email,number,name}]);
        // (data);
        setName("");
        setNumber("");
        setEmail("");
    }
    return (
    <>
        <h1>Form</h1>
        <form action=""  onSubmit={handleSubmit} >
            <label htmlFor="">Name</label>
            <input type="text" value={name}  onChange={(e)=> setName(e.target.value)}/> 
            <label htmlFor="">Number</label>
            <input type="number"  value={number} onChange={(e)=> setNumber(e.target.value)}/>
            <label htmlFor="">Email</label>
            <input type="email" value={email}  onChange={(e)=> setEmail(e.target.value)}/>
            <button type="submit">submit</button>
        </form>
        
        <div>
            {data.map((item, index) => (
            <p key={index}>{item.name} - {item.number} - {item.email} </p>
            ))}
        </div>

    </>
    );
}

export default Forms;