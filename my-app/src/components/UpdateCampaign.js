import React from "react";
import axios from "axios";

class UpdateCampaign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: "",
            animal: "",
            urgency: "",
            location: "",
            date: "",
            description: "",
            funding_goal: "",
            image: ""
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = () => {
        axios   
            .put(`https://save-the-animals-be.herokuapp.com/api/campaign/${this.state.id}`, this.state)
            .then(response => {
                console.log("Updating Campaign..." , response)
                this.props.history.push(`/update-campaign/${this.props.match.params.id}`)
            })
            .catch(error => {
                console.log(error)
            });
    };

    render() {
        return(
            <div className="signup-container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Update Campaign</h1>

                    <div className="u-box">
                        <h3 className="u-h3">Title</h3>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder="Update title"
                    />
                    </div>

                    <div className="u-box">
                        <h3 className="u-h3">Animal</h3>
                    <input
                        type="text"
                        name="animal"
                        value={this.state.animal}
                        onChange={this.handleChange}
                        placeholder="Update animal"
                    />
                    </div>
                    <div className="u-box">
                        <h3 className="u-h3">Location</h3>
                    <input
                        type="text"
                        name="location"
                        value={this.state.location}
                        onChange={this.handleChange}
                        placeholder="Update location"
                    />
                    </div>

                    <div className="u-box">
                        <h3 className="u-h3">Date</h3>
                    <input
                        type="date"
                        name="date"
                        value={this.state.date}
                        onChange={this.handleChange}
                        placeholder="Update date"
                    />
                    </div>

                    <div className="u-box">
                        <h3 className="u-h3">Description</h3>
                    <input
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder="Update description"
                    />
                    </div>

                    <div className="u-box">
                        <h3 className="u-h3">Funding Goal</h3>
                    <input
                        type="number"
                        name="funding_goal"
                        value={this.state.funding_goal}
                        onChange={this.handleChange}
                    />
                    </div>

                    <div className="u-box">
                        <h3 className="u-h3">URGENCY</h3>
                            <select name="urgency">
                                <option value={this.state.urgency}>
                                    High!
                                </option>
                                <option value={this.state.urgency}>
                                    Medium!
                                </option>
                                <option value={this.state.urgency}>
                                    Low!
                                </option>
                            </select>
                        </div>
                        <button>Submit</button>
                </form>
            </div>
        )
    }
};

export default UpdateCampaign;