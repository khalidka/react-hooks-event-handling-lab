// Code Keypad Component Here

function Keypad (){
    const handleChange = (e) =>{
        console.log("Entering password...", e.target.value);
    } 
    return (
        <div>
         <input onChange={handleChange} type="password" />
        </div>
    )
}

export default Keypad;