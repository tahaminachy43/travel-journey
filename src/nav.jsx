import world from "./assets/png-clipart-earth-drawing-black-and-white-earth-globe-monochrome.png"

function nav(){
    return(
        <div className="nav">
            <img className="nav--image" src = {world} alt = "world"/>
            <h3 className="nav--heading">My Travel Journal</h3>
        </div>
    )
}

export default nav