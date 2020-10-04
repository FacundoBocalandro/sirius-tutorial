import {
    Body,
    Button,
    Container,
    Content,
    Form,
    Header,
    Icon,
    Input,
    Item,
    Left,
    Right,
    Title
} from "native-base";
import {Text, View} from "react-native";
import React from "react";
import {addZero, getIndex, getRandomColor} from "./Utils";
import MyDatePicker from "./MyDatePicker";
import MyTimePicker from "./MyTimePicker";

export default function AddScreen(props) {
    const [chosenDate, setChosenDate] = React.useState(new Date());
    const [startHour, setStartHour] = React.useState(new Date());
    const [endHour, setEndHour] = React.useState(new Date());
    const [name, setName] = React.useState("");
    const [showStart, setShowStart] = React.useState(false);
    const [showEnd, setShowEnd] = React.useState(false);

    const handleAddEvent = () => {
        let newEvents = {...props.events};
        const dateString = `${chosenDate.getFullYear()}-${addZero(chosenDate.getMonth() + 1)}-${chosenDate.getDate()}`;
        const eventObj = {
            name: name,
            date: dateString,
            start: `${addZero(startHour.getHours())}:${addZero(startHour.getMinutes())}`,
            end: `${addZero(endHour.getHours())}:${addZero(endHour.getMinutes())}`,
            color: getRandomColor(),
        };
        if (newEvents[dateString]) {
            newEvents[dateString].splice(getIndex(startHour, newEvents), 0, eventObj);
        } else {
            newEvents[dateString] = [eventObj];
        }

        reset(newEvents);
    }

    const reset = (newEvents) => {
        setName("");
        setStartHour(new Date());
        setEndHour(new Date());
        setChosenDate(new Date());
        props.handleOnAddChange();
        props.setEvents(newEvents);
    }
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={props.handleOnAddChange}>
                        <Icon name='arrow-back'/>
                    </Button>
                </Left>
                <Body>
                    <Title>Add event</Title>
                </Body>
                <Right/>
            </Header>
            <Content>
                <Form>
                    <Item>
                        <MyDatePicker setChosenDate={setChosenDate}/>
                    </Item>
                    <Item>
                        <Input
                            placeholder={'Name'}
                            onChangeText={text => setName(text)}
                            value={name}
                        />
                    </Item>
                    <View>
                        <Button onPress={() => setShowStart(!showStart)}><Text>Choose start hour</Text></Button>
                        <View>
                            {showStart && (
                                <MyTimePicker hour={startHour} setHour={setStartHour}/>
                            )}
                        </View>
                    </View>
                    <View>
                        <Button onPress={() => setShowEnd(!showEnd)}><Text>Choose end hour</Text></Button>
                        <View>
                            {showEnd && (
                                <MyTimePicker hour={endHour} setHour={setEndHour}/>
                            )}
                        </View>
                    </View>
                </Form>
                <Button onPress={handleAddEvent} title={"Submit"}><Text>Submit</Text></Button>
            </Content>
        </Container>
    )
}
