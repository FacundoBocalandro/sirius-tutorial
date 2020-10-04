import {StyleSheet} from "react-native";

export const addZero = (num) => {
    return ("0" + (num)).slice(-2)
}

export const getIndex = (startHour, events) => {
    let pos = 0;
    while(pos < events.length){
        const newHours = startHour.getHours();
        const [hour, min] = events[pos].start.split(':');
        if (newHours < hour || (newHours === hour && startHour.getMinutes() <= min)) return pos;
        pos++;
    }
    return pos;
}

export const getRandomColor = () => {
    return "#" + ((1 << 24) * Math.random() | 0).toString(16);
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    },
    addButton: {
        position: 'absolute',
        bottom: 40,
        right: 30,
    }
});
