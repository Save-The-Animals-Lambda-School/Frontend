import React from "react";
// import S from "styled-components";
import axios from "axios";



class CreateCamp extends React.Component {
    state = {
        newCampaign: {
            title: "",
            animal: "",
            urgency: "",
            location: "",
            date: "",
            description: "",
            fundingGoal: "",
            images: [],
            completed: "",
            completed: false
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

    addCampaignToList = e => {
        axios.post("https://save-the-animals-be.herokuapp.com/api/campaigns", this.state.newCampaign, {
            // headers here headers: {Authorization: localStorage.getItem("token")}
        })
        .then("ADD CAMPAIGN RESPONSE" , response => {
            console.log(response)
        })
        .catch("ADD CAMPAIGN FAILED", error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <div className="NCF">
                    <h1 className="NCh1">Create A Campaign</h1>
                    <form onSubmit={this.addCampaignToList}>
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
                            <h3 className="NCh3">Animal</h3>
                            <input 
                                className="input"
                                type="text"
                                name="animal"
                                value={this.state.newCampaign.animal}
                                onChange={this.handleChange}
                                placeholder="What Animal"
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
                                value={this.state.newCampaign.fundingGoal}
                                onChange={this.handleChange}
                                placeholder="Goal"
                            />
                        </div>

                        <div>
                            <h5 className="description">Description</h5>
                            <input 
                                className="input"
                                type="text"
                                name="description"
                                value={this.state.newCampaign.description}
                                onChange={this.handleChange}
                                placeholder="Describe the issues..."
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
                            <button>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateCamp;