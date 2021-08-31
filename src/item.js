import { useState } from "react";

const Item = ({id,image,info,name,price,removeitem}) =>{
    // readmore 
    const [readmore, setReadmore] = useState(false);
    return (
        <article className="single-item">
            <img src={image} alt={name} />
            <footer>
                <div className="item-info">
                    <h4>{name}</h4>
                    <h4 className="item-price">${price}</h4>
                </div>
                {/* // using the functionality of Readmore and show less */}
                <p>
                    {readmore ? info :  `${info.substring(0,200)}...`} 
                    <button onClick={()=>setReadmore(!readmore)}> {readmore ? "Show less" : "Read more"  }</button>
                </p>
                <button className="delete-btn" onClick={() => removeitem(id)}>not interested</button>
            </footer>
        </article>
    )
    
}


export default Item;