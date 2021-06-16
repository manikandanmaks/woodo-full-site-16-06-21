import React from 'react';
import { client } from '../client';
import WFFurnitureImageSectionPost from './datalayer/WFFurnitureImageSectionPost';

class WFFurnitureSection extends React.Component {
    state = {
        FurnitureImages: []
    }

    componentDidMount() {
        client.getEntries({
            'content_type': 'wfFurnitureImageSection'
        })
            .then((response) => {
                this.setState({
                    FurnitureImages: response.items
                })
            })
            .catch(console.error)
    }
    render() {
        console.log(this.state.FurnitureImages)
        return (
            <div className="our_section_2">
                <div className="row">
                    <div className="images_section_2">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="image_left">
                                <button className="seemore_bt">SEE MORE</button>
                            </div>
                           
                            {this.state.FurnitureImages.map
                                ((FurnitureImage, index) => <WFFurnitureImageSectionPost FurnitureImage={FurnitureImage} key={index} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WFFurnitureSection;