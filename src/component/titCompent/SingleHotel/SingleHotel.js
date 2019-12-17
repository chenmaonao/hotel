import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import "./SingleHotel.scss"


class SingleHotel extends Component {
    constructor(props) {
        super(props);
        this.state = {}
       
    }
    render() {
        let hotelItem = this.props.hotelItem;
        

        return (<li className="singer-bigbox" onClick={() => {
            console.log(this.props.hotelItem.unifiedId)
            this.props.history.push({
                pathname: "/select/particular",
                state: {
                    unifiedId: this.props.hotelItem.unifiedId,
                    rating: hotelItem.rating,
                    commentCount: hotelItem.commentCount
                }
            })
        }}>
            <div className="hotel-show-img" style={hotelItem.imageUrls ? { backgroundImage: `url(${hotelItem.imageUrls[0]})` } : {}}>
            </div>
            <div className="hotel-title-info">
                <div className="title">{hotelItem.title}</div>
                <div className="out-rating">
                    {hotelItem.rating ? <span className="rating">{hotelItem.rating}分</span> : false}
                    {hotelItem.commentCount ? (hotelItem.commentCount + '条点评') : false}
                </div>
                <div className="businessDistrict">{hotelItem.businessDistrict ? hotelItem.businessDistrict : hotelItem.address ? hotelItem.address : false}</div>
                <div className="hotel-price">人均{hotelItem.avgPrice ? hotelItem.avgPrice : 0}元</div>

                {hotelItem.tags ? (<div className="infrastructures">
                    {hotelItem.tags.map((item, index) => {
                        if (index >= 3) {
                            return false
                        }
                        return (<span key={index}>{item}</span>)
                    })}
                </div>) : false}

            </div>
        </li>);



    }
}

export default withRouter(SingleHotel);




