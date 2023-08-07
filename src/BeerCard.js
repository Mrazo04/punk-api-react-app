import React, {useState} from "react";


function BeerCard(props){
    const { name, image_url, tagline, first_brewed, description, abv, like} = props;
    const [liked, setNotLiked] = useState(false);
  
    const handleClick = () => {
        let status = liked === true ? false : true
        console.log("liked!")
        setNotLiked(status);
    };

    return(
        <li style={{ listStyle:"none" }}>
            <img style={{ height: "200px" }} src={image_url} alt="beer"></img>
            <h3>{name} <span>{first_brewed}</span></h3> 
            <h4>{tagline} 
            </h4>
            <p><span>{abv}</span> {description}</p> 
            <span>
             <button style={{ height: "50px", width: "50px", marginBottom:"10px"}} onClick={handleClick}>LIKE{like}</button>
            </span>
            
        </li>
    )
}

export default BeerCard