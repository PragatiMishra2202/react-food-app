const RestaurantCard = (props) =>{
        const{resData} = props;

        const {name, cuisines,avgRating, costForTwo, deliveryTime} = resData?.info;
        return(
            <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
                <img 
                    className="res-logo"
                    alt = "res-logo"
                    src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
                      } />
                <h3>{name}</h3>
                <h4>{cuisines.join(" , ")}</h4>
                <h5>{avgRating}</h5>
                <h6>{costForTwo}</h6>
                <h6>{sla?.slaString}</h6>
            </div>
        );
    };

    export default RestaurantCard;