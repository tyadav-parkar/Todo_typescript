import { useState } from "react";
function SearchButton(){
    let items=["Apple","Orange", "Nanu", "Tanishq", "Yadav"];
    const [search, setSearch]=useState("");
    const [found,setFound]=useState("Not Found");
    function Search(e){
        e.preventDefault();
        const ty=items.find((i)=>{i.toLocaleLowerCase()==search.toLocaleLowerCase()}) 
        if(ty){
            setFound(search)
        }   
    }
    return(
    <>
        <h1>Search </h1>
        <form action="" onSubmit={Search}>
            <input type="text"  value={search} onChange={ (e)=> setSearch(e.target.value)   } />
            <button type="submit">serach</button>
        </form>
        <p>{found}</p>
    </>
    )
}
export default SearchButton;