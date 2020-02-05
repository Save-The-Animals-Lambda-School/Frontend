import React, { useState } from "react";
import axios from "axios";

const UpdateCampaign = (props) => {

    const [ campaign, setCampaign ] = useState({
        id: props.match.params.id,
        title: "",
        animal: "",
        urgency: "",
        location: "",
        date: "",
        description: "",
        funding_goal: "",
        image: "",
        completed: false
    })

    const handleChange = e => {
        setCampaign({
            ...campaign,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios   
            .put(`https://save-the-animals-be.herokuapp.com/api/campaigns/${campaign.id}`, campaign)
            .then(response => {
                console.log("Updating Campaign..." , response)
                props.history.push(`/update-campaign/${props.match.params.id}`)
            })
            .catch(error => {
                console.log(error)
            });
    };

        return (
            <div className="signup-container">
                <form onSubmit={handleSubmit}>
                    <h1>Update Campaign</h1>

                    <div className="u-box">
                        <h3 className="u-h3">Title</h3>
                    <input
                        type="text"
                        name="title"
                        value={campaign.title}
                        onChange={handleChange}
                        placeholder="Update title"
                    />
                    </div>

                    <div className="u-box">
                        <h3 className="u-h3">Animal</h3>
                    <input
                        type="text"
                        name="animal"
                        value={campaign.animal}
                        onChange={handleChange}
                        placeholder="Update animal"
                    />
                    </div>
                    <div className="u-box">
                        <h3 className="u-h3">Location</h3>
                    <input
                        type="text"
                        name="location"
                        value={campaign.location}
                        onChange={handleChange}
                        placeholder="Update location"
                    />
                    </div>

                    <div className="u-box">
                        <h3 className="u-h3">Date</h3>
                    <input
                        type="date"
                        name="date"
                        value={campaign.date}
                        onChange={handleChange}
                        placeholder="Update date"
                    />
                    </div>

                    <div className="u-box">
                        <h3 className="u-h3">Description</h3>
                    <input
                        type="text"
                        name="description"
                        value={campaign.description}
                        onChange={handleChange}
                        placeholder="Update description"
                    />
                    </div>

                    <div className="u-box">
                        <h3 className="u-h3">Funding Goal</h3>
                    <input
                        type="number"
                        name="funding_goal"
                        value={campaign.funding_goal}
                        onChange={handleChange}
                    />
                    </div>

                    <div className="u-box">
                        <h3 className="u-h3">URGENCY</h3>
                            <select name="urgency">
                                <option value={campaign.urgency}>
                                    High!
                                </option>
                                <option value={campaign.urgency}>
                                    Medium!
                                </option>
                                <option value={campaign.urgency}>
                                    Low!
                                </option>
                            </select>
                        </div>
                        <button>Update</button>
                </form>
            </div>
        )
};

export default UpdateCampaign;