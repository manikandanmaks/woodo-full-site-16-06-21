import React from 'react';
import HeaderSection from '../pages/WFHeaderSection';
import BannerSection from '../pages/WFBannerSection';

class WFMainHeader extends React.Component {
    render() {
        return (
            <div className="header_section">
                <HeaderSection />
                <BannerSection />
            </div>
        )
    }
}

export default WFMainHeader;