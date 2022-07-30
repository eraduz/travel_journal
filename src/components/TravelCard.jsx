import Placeholder from '../assets/placeholder.png'
import Pin from '../assets/pin.png'

export default function TravelCard(props) {
    console.log(props)
    return (
        <div className="travel-card">
        <div className="travel-card--data"> 
        
            <div className="thumbnail" style={{
                backgroundImage: `url(${props.imageUrl})`,
                     
            }} />
            <div className="body">
                <div className="header">
                    <div className="country">
                    <img src={Pin} />
                    <span>{props.title}</span>
                    </div>
                    
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.location}</h1>
                <div className="date">
                    <span>{props.startDate}</span> - <span>{props.endDate}</span>
                </div>
                <p className='description'>
                    {props.description}
                </p>
            </div>
        </div>
        <hr />
        </div>
        
        )
}