import React from "react";
import axios from "axios";

class CampaignList extends React.Component {
    state = {
        CampaignList: []
    };

    componentDidMount() {
        this.getCampaigns();
    };
    
    getCampaigns = () => {
        axios
            .get("https://save-the-animals-be.herokuapp.com/api/campaigns")
            .then(response => {
                // console.log(response.data)
                this.setState({
                    ...this.state, CampaignList: response.data
                })
            })
            .catch(error => {
                console.log("Failed to load",error)
            })
    };

    deleteCampaign = (campaign) => {
        axios
            .delete(`https://save-the-animals-be.herokuapp.com/api/campaigns/${campaign.id}`)
            .then(response => {
                this.getCampaigns(response);
            })
            .catch(error => {
                console.log("Failed to delete campaign" , error)
            })
    }
    
    render(){
        return (
            <div className="campaignlist-container">
                    <h1>Current Campaigns</h1>
                    {this.state.CampaignList.map(campaign =>
                        <div className="campaign-container">
                            <h3>{campaign.title}</h3>
                            <p>{campaign.location}</p>
                            <p>{campaign.description}</p>
                            <button>Edit</button>
                            <button onClick={e => {
                                e.stopPropagation();
                                this.deleteCampaign(campaign)
                            }
                            }>Delete</button>
                            
                        </div>    
                    )}
            </div>
        )
    }
}

export default CampaignList;