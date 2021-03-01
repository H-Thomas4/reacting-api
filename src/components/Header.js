
import Button from './Button';

const Header = () => {
    const logo = (<img 
        //src="https://ghibliapi.herokuapp.com/images/logo.svg")
        src={'https://filmsxpress.com/userimages/60/images/News-Page-Studio-Ghibli-Fest-2019-032019.jpg'}
        alt='Studio Ghibli'
        />
    );

    return (
        <div className="container"
        >
            <h1>Studio Ghibli Information</h1>
            <>
            <Button color='lightblue' text='Load Films' onClick={onClick} />
            </>
            <>
            <Button color='lightgreen' text='Load People' onClick={onClick}/>
            </>
        </div>  

    )
};

export default Header;