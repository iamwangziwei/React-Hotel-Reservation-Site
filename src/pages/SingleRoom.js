import React, { Component } from "react";
import defaultbcg from "../images/room-1.jpeg";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../Components/StyledHero";
export default class SingleRoom extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            slug:this.props.match.params.slug,
            defaultbcg
        };
    }
    
    static contextType = RoomContext;
    //componentDidMount(){}

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);

        if (!room) {
            return (
              <div className="error">
                <h3> no such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                  back to rooms
                </Link>
              </div>
            );
          }

        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        const [mainImg,...defaultImg] = images;
        return (
            <> 
            <StyledHero img={images[0] || this.state.defaultBcg}>
            <Banner title={`${name} room`}>
                <Link to="/rooms" className="btn-primary">
                back to rooms
                </Link>
            </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item, index) => (
                    <img key={index} src={item} alt={name} />))}
                </div>
            </section>

            </>
        ); //Adjacent JSX elements must be wrapped in an enclosing tag  while parsing file

    }
}

