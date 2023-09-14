// Code Keypad Component Here

function Keypad (){
    function passwordIn() {
        console.log('Entering password...');
    }
    
    return (
        <div>
            <input type='password' onChange={passwordIn} />
        </div>
    )
}

export default Keypad;