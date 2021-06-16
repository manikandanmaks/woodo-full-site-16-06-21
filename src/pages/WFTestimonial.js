import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import { client } from '../client';
class testimonial extends Component {
    state = { testiList: [] }
    componentDidMount() {
        client.getEntries({ content_type: 'wfTestimonial' })
            .then((response) => {
                console.log(response)
                this.setState({
                    testiList: response.items
                })
            })
            .catch(console.error)

    }
    render() {
        const divStyle = {
            backgroundColor: ' #fee421', color: '#fff', padding: '0px 5px'
        };
        var settings = {
            infinite: true,
            speed: 500,
        };
        return (
            <React.Fragment>
                <div className="testi_monial_section layout_padding" id="company">
                    <div className="container">
                        <div id="my_carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="slide-container">
                                    <Slide {...settings}>
                                        {this.state.testiList.map((testi) =>
                                            <div className="each-slide">
                                                <div className="carousel-item active">
                                                    <h1 className="testi_monila_text">Testi <span style={divStyle}>Monial</span></h1>
                                                    <div className="testimonila_inner">
                                                        <div className="testing_img"><img src={testi.fields.testiimage.fields.file.url} alt="ai" /></div>
                                                        <h2 className="helina_text">{testi.fields.contenttitle}</h2>
                                                        <p className="dolor_text">{testi.fields.content}</p>
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    </Slide>
                                </div>
                            </div>
                            {/* <a className="carousel-control-prev" href="#my_carousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#my_carousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a> */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default testimonial;