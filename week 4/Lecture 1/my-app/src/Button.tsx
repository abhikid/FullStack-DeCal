function handleClick(){
    console.log("Hello World")
}

function Button({ButtonText}) {
    return <button onClick={handleClick}>{ButtonText}</button>;
}

export default Button;