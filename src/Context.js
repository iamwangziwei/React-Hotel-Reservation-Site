import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext();

 class RoomProvider extends Component {
    state={
        room:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true //if we still loading the info,show the spinner. if not, display the item
    };

    //getDate
    componentDidMount(){
        //this.getData
        let rooms = this.formatDate(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading:false
        });
    }

    formatDate(items){  //return the fields.images and id 
        let tempItems = items.map(item =>{
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields,images,id};
            return room;
        })
        return tempItems;
    }


    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}

            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer

export {RoomProvider,RoomConsumer,RoomContext};