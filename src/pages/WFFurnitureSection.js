import React from 'react';
import { client } from '../client';
import WFFurnitureSectionPost from './datalayer/WFFurnitureSectionPost';

class WFFurnitureSection extends React.Component {
    state = {
        FurnitureDetail: []
    }

    componentDidMount() {
        client.getEntries({
            'content_type': 'wfFurnitureSection'
        })
            .then((response) => {
                this.setState({
                    FurnitureDetail: response.items
                })
            })
            .catch(console.error)
    }
    render() {
        return (
            <div className="our_furniture_section layout_padding" id="furnitures">
                {this.state.FurnitureDetail.map
                    ((Furniture, index) => <WFFurnitureSectionPost Furniture={Furniture} key={index} />)}
            </div>
        )
    }
}

export default WFFurnitureSection;