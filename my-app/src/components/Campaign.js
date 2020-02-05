import React from "react";
import axios from "axios";
import CampaignCard from "./CampaignCard";
import { Link } from "react-router-dom";

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            campaign: null
        };
    }

    componentDidMount() {
        this.fetchCampaign(this.props.match.params.id);
    }

    componentDidUpdate(newProps) {
        if (this.props.match.params.id !== newProps.match.params.id) {
            this.fetchCampaign(newProps.match.params.id);
        }
    }

    fetchCampaign = id => {
        axios
            .get(`https://save-the-animals-be.herokuapp.com/api/campaigns/${id}`)
            .then(response => this.setState({ campaign: response.data }))
            .catch(error => console.log("EXPERIMENTAL ERROR", error.response));
    };

    deleteCampaign = (campaign) => {
        axios
            .delete(`https://save-the-animals-be.herokuapp.com/api/campaigns/${this.props.match.params.id}`)
            .then(response => {
                console.log(response)
                this.props.history.push(`/campaign-list`)
            })
            .catch(error => {
                console.log("Failed to delete campaign" , error)
            })
    };

    render() {
        if (!this.state.campaign) {
            return <div>Loading campaigns...</div>;
        }

        return (
            <div className="updating-div">
                <CampaignCard campaign={this.state.campaign} />
                <Link to={`/update-campaign/${this.state.campaign.id}`}><button>Update</button></Link>
                <button onClick={this.deleteCampaign}>Delete</button>
            </div>
        );
    }
}