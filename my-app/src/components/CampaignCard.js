import React from "react";

const CampaignCard = props => {
    console.log(props);
    const { title, animal, urgency, location, date, description, funding_goal} = props.campaign;

    return (
        <div className="campaignlist-container">
            <h2>{title}</h2>
            <div>
                Animal: {animal}
            </div>
            <div>
                <p>{location}</p>
                <p>{date}</p>
                <p>{description}</p>
                <p>{funding_goal}</p>
                <select name="urgency">
                        <option value={urgency}>
                                    High!
                        </option>
                        <option value={urgency}>
                                    Medium!
                        </option>
                        <option value={urgency}>
                                    Low!
                        </option>
                 </select>
            </div>
        </div>
    )
}

export default CampaignCard;