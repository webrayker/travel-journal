import pointer from '/pointer.svg'

export default function Card(props) {
    return (
        <div className="card">
            <img src={`${props.imageUrl}`} alt="place" className="image"/>
            <div className="information">
                <div className="stats">
                    <div className="location-title">
                        <img src={pointer} alt="pointer"/>
                        <span className="location">{props.location}</span>
                        <a href={props.googleMapsUrl} target="_blank" className="location-link">View on Google Maps</a>
                    </div>
                    <h2>{props.title}</h2>
                    <span className="date">{props.startDate} - {props.endDate}</span>
                    <p>{props.description}</p>
                </div>  
            </div>
        </div>  
    )
}