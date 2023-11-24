import world from "./assets/Fill 213.svg"


function nav(){
    return(
        <div className="nav">
            <img className="nav--image" src = {world} alt = "world"/>
            <h3 className="nav--heading">My Travel Journal</h3>
        </div>
    )
}

export default nav