import './main-container.styles.css'
import divider from "./pattern-divider-desktop.svg"

const MainContainer = ({advice,id}) => {
    

    return ( 
        <div className="main-container">
            <p className="advice-number">ADVICE #{id}</p>
            <p className="advice">
                "{advice}"
            </p>
            <img src={divider} alt="" className="divider" />
        </div>
    );
}

export default MainContainer;