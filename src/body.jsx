import PropTypes from 'prop-types';


function Body(props){
    return(
        <div className='body'>
            <img src = {props.item.img} alt ="Image" className='image'/>
            <div className='two'>
                <div className='three'>
                    <img src={props.item.locater} alt = "locater" className='locater'/>
                    <p className='country'> {props.item.country}</p>

                </div>
                
                <h3 className='title'> {props.item.title}</h3>
                <p className='timeline'>{props.item.timeline}</p>
                <p className='talk'>{props.item.talk}</p>
            </div>
        </div>

    )
}
               
Body.propTypes = {
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