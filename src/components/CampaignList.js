import React from "react";
import axios from "axios";
import CampaignCard from "./CampaignCard";
import { Link } from "react-router-dom";


export default class CampaignList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            campaigns: []
        };
    }


    componentDidMount() {
        this.getCampaigns();
    };
    
    getCampaigns = () => {
        axios
            .get("https://save-the-animals-be.herokuapp.com/api/campaigns")
            .then(response => {
                // console.log(response.data)
                this.setState({
                    ...this.state, campaigns: response.data
                })
            })
            .catch(error => {
                console.log("Failed to load",error)
            })
    };

    render() {
        return (
            <div className="campaignlist">
                {this.state.campaigns.map(campaign => (
                    <CampaignDetails key={campaign.id} campaign={campaign} />
                ))}
            </div>
        );
    }
}

function CampaignDetails({ campaign }) {
    return (
        <Link className="annoyingLink" to={`/campaign/${campaign.id}`}>
            <CampaignCard campaign={campaign}/>
        </Link>
    );
}
