// import React from 'react'
// import {Link} from 'react-router-dom';
// import defaultImg from '../images/room-1.jpeg';
// import PropTypes from 'prop-types';
// import RoomContainer from '../Components/RoomContainer';

// export default function Room({room}) {
//     const{name,slug, images,price} = room;


//     return (
//         <article className="room">

//         <div className="img-container">
//             <img src = {images[0] || defaultImg} alt="single room"/> 
//             <div className="price-top">
//                 <h6>${price}</h6>
//                 <p>per night</p>
//             </div>
//             <Link to={`/rooms/${slug}`} className="btn-primary room-link">
//                   Features
//             </Link>
//         </div>

//     <p className="room-info">{name}</p>

//         </article>
//     )//if the img url is unavalable, can use defaulgimg
// }


// //check wether the prop has been passed  
// Room.propTypes = {
//     room:PropTypes.shape({
//         name:PropTypes.string.isRequired,
//         slug:PropTypes.string.isRequired,
//         images:PropTypes.arrayOf(PropTypes.string).isRequired,
//         price:PropTypes.number.isRequired
//     })
// } 

import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";
const Room = memo(({ room }) => {
  const { name, slug, images, price } = room;
  // console.log(name);
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
});

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Room;
