const Button = ({ color, text}) => {
    

    return (
        <button 
        onClick={onClick}
        style={{background:color}}
        className='btn'>
            {text}
            </button>
    )
};


export default Button;