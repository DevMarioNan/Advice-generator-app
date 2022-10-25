import './main-container.styles.css'
import divider from "./pattern-divider-desktop.svg"

const MainContainer = ({advice,id}) => {
    

    return ( 
        <div className="main-container">
            <p className="advice-number">ADVICE #{id}</p>
            <p className="advice">
                "{advice}"
            </p>
            <div className="divider" style={{
                backgroundImage: `url(${divider})`
            }}>
            </div>
            
        </div>
    );
}

export default MainContainer;