import React from 'react';
import {constEvents} from "./Events";
import MyAgenda from "./MyAgenda";
import AddScreen from "./AddScreen";

export default function App() {

    const [onAdd, setOnAdd] = React.useState(false);
    const handleOnAddChange = () => {
        setOnAdd(!onAdd);
    }

    const [events, setEvents] = React.useState(constEvents);

    const deleteItem = (item) => {
        const newEvents = {...events};
        const arr = newEvents[item.date];
        arr.splice(arr.indexOf(item), 1);
        setEvents(newEvents);
    }

    return (
        onAdd ?
            <AddScreen handleOnAddChange={handleOnAddChange} events={events} setEvents={setEvents}/>
            :
            <MyAgenda handleOnAddChange={handleOnAddChange} events={events} deleteItem={deleteItem}/>
    );
}
