import PropTypes from 'prop-types';


function Body(props){
    return(
        <div className='body'>
            <img src = {props.item.img} alt ="Image" className='image'/>
            <div>
                <img src={props.item.locater} alt = "locater"/>
                <h3> {props.item.title}</h3>
            </div>
        </div>

    )
}

Body.prototype = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
        locater: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        timeline: PropTypes.string.isRequired,
        talk: PropTypes.string.isRequired,

    }

    ).isRequired
}


export default Body