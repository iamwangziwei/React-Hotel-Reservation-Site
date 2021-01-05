import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomList from './RoomList'
import {RoomConsumer} from '../Context'
import Loading from './Loading'




export default function RoomContainer() {
    return (
        <RoomConsumer>
            {value => {
                const {loading,sortedRooms, rooms} =value
                
                if (loading) {
                    return <Loading/>;
                }
                
                return (
                    <div>
                        <RoomsFilter rooms={rooms}/> 
                        <RoomList rooms = {sortedRooms}/> 
                    </div>
                )
            }}

        </RoomConsumer>

    )
}
