import icon from './icon-dice.svg'
import './button.styles.css'

const Button = ({handleClick}) => {
    const adviceURI = '	https://api.adviceslip.com/advice';

    return (
        <div className='button-div'>
            <button onClick={async ()=>{
                const response =await fetch(adviceURI);
                const advice = await response.json();
                handleClick(advice);
            }}>
                <img src={icon} alt="" />
            </button>
        </div>
    );
}

export default Button;