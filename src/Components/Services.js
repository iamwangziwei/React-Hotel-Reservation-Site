import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={services:[{
        icon:<FaCocktail/>,
        title:"Free Cocktails",
        info:"wewedrwedwed"
    },
    {
        icon:<FaHiking/>,
        title:"Endless Hiking",
        info:"wewedrwedwed"
    },
    {
        icon:<FaShuttleVan/>,
        title:"Free Shuttle",
        info:"wewedrwedwed"
    },
    {
        icon:<FaBeer/>,
        title:"Strongest Bear",
        info:"wewedrwedwed"
    }
]}
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className = "services-center">
                    {this.state.services.map((item,index )=>{
                         return <article key={index} className="service">
                                    <span> {item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>

                                </article>
                    } )}
                </div>


            </section>
        )
    }
}
