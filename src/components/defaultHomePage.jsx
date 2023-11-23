import "./dashBoard.css"
import dasbordImage from '../assets/Rectangle6.svg'

const HomePageDeafult =()=>{
    return(
        <div className="default">
                        <div className="defaultCard">
                            <div className="defaultcardDetails">
                                <img src={dasbordImage} alt="" style={{
                                    width: '600px',
                                    height: '218px',
                                    borderRadius: '8px'
                                }} />
                                <h1>Welcome to Star Wars Dashboard</h1>
                                <p>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
                            </div>

                        </div>
                    </div>
    )
}

export default HomePageDeafult;