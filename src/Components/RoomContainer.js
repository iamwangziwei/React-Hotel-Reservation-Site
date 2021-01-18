import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomList from './RoomList'
import { withRoomConsumer} from '../Context'
import Loading from './Loading'

function RoomContainer({context}) {
    const {loading,sortedRooms, rooms} =context
    if (loading) {
        return <Loading/>;
    }
    return (
        <div>
            <RoomsFilter rooms={rooms}/> 
            <RoomList rooms = {sortedRooms}/> 
        </div>
    );
        
}
export default withRoomConsumer(RoomContainer)
