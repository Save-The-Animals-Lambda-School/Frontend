import React from "react";
// import S from "styled-components";
// import axios from "axios";



class CreateCamp extends React.Component {
    state = {
        newCampaign: {
            title: "",
            date: "",
            location: "",
            donationGoal: "",
            urgency: "",
            images: [],
            completed: ""
        }
    };

    handleChange = e => {
        this.setState({
            newCampaign: {
                ...this.state.newCampaign,
                [e.target.name]: e.target.value
            }
        });
    };

    // addCampaignToList = e => {
    //     axios.post("", this.state.newCampaign, {
    //         // headers here headers: {Authorization: localStorage.getItem("token")}
    //     })
    //     .then("ADD CAMPAIGN RESPONSE" , response => {
    //         console.log(response)
    //     })
    //     .catch("ADD CAMPAIGN FAILED", error => {
    //         console.log(error)
    //     })
    // }
    // onSubmit={this.addCampaignToList}
    render() {
        return (
            <div>
                <div className="NCF">
                    <h1 className="NCh1">Create A Campaign</h1>
                    <form>
                        <div className="c-box">
                            <h3 className="NCh3">Title</h3>
                            <input
                                className="input"
                                type="text"
                                name="title"
                                value={this.state.newCampaign.title}
                                onChange={this.handleChange}
                                placeholder="Enter Campaign Title"
                            />
                        </div>

                        <div className="c-box">
                            <h3 className="NCh3">Date</h3>
                            <input
                                className="input"
                                type="date"
                                name="date"
                                value={this.state.newCampaign.date}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="c-box">
                        <h3 className="NCh3">Location</h3>
                            <input
                                className="input"
                                type="text"
                                name="location"
                                value={this.state.newCampaign.location}
                                onChange={this.handleChange}
                                placeholder="Where Is Help Needed"
                            />
                        </div>

                        <div className="c-box">
                        <h3 className="NCh3">Goal</h3>
                            <input
                                className="input"
                                type="number"
                                min="0.00"
                                steps="any"
                                name="donationGoal"
                                value={this.state.newCampaign.donationGoal}
                                onChange={this.handleChange}
                                placeholder="Goal"
                            />
                        </div>

                        <div>
                            <select name="urgency">
                                <option value={this.state.newCampaign.urgency}>
                                    URGENT!
                                </option>
                                <option value={this.state.newCampaign.urgency}>
                                    Help Needed
                                </option>
                                <option value={this.state.newCampaign.urgency}>
                                    Growing Concern
                                </option>
                            </select>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default CreateCamp;