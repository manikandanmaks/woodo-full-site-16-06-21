import React from 'react';
import { client } from '../client';
import VSAboutSectionPost from './datalayer/WFAboutSectionPost';

class WFAboutSection extends React.Component {
    state = {
        Abouts: []
    }

    componentDidMount() {
        client.getEntries({
            'content_type': 'wfAboutSection'
        })
            .then((response) => {
                this.setState({
                    Abouts: response.items
                })
            })
            .catch(console.error)
    }
    render() {
        return (
            <div className="layout_padding about_section" id="about">
                {this.state.Abouts.map
                    ((About, index) => <VSAboutSectionPost About={About} key={index} />)}
            </div>
        )
    }
}

export default WFAboutSection;