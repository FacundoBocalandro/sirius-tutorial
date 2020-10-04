import React from 'react';
import {StyleSheet} from "react-native";
import {Form, Item, Input, Text} from 'native-base';

export default function FirstStep(props) {
    return (
        <Form>
            <Item>
                <Input placeholder="Email"
                       autoCompleteType={'email'}
                       textContentType={'emailAddress'}
                       value={props.firstStep.email}
                       onChangeText={text => props.setFirstStep({
                           ...props.firstStep,
                           email: text,
                       })}
                       style={styles.inputText}
                       placeholderTextColor={"#e9e0e0"}
                       borderBottomColor={"white"}
                />
            </Item>
            {props.firstStep.error.emailError?
                <Text style={styles.inputError}>Invalid Email!</Text>
                :
                <></>
            }
            <Item>
                <Input placeholder="Username"
                       autoCompleteType={'username'}
                       maxLength={15}
                       textContentType={'username'}
                       value={props.firstStep.username}
                       onChangeText={text => props.setFirstStep({
                           ...props.firstStep,
                           username: text,
                       })}
                       style={styles.inputText}
                       placeholderTextColor="#e9e0e0"
                       borderBottomColor="white"
                />
            </Item>
            {props.firstStep.error.usernameError?
                <Text style={styles.inputError}>Username should have at least 4 characters!</Text>
                :
                <></>
            }
            <Item>
                <Input placeholder="Password"
                       secureTextEntry
                       autoCompleteType={'password'}
                       textContentType={'password'}
                       value={props.firstStep.password}
                       onChangeText={text => props.setFirstStep({
                           ...props.firstStep,
                           password: text,
                       })}
                       style={styles.inputText}
                       placeholderTextColor="#e9e0e0"
                       borderBottomColor="white"
                />
            </Item>
            {props.firstStep.error.passwordLength?
                <Text style={styles.inputError}>Password must have at least 4 characters!</Text>
                :
                <></>
            }
            <Item>
                <Input placeholder="Repeat Password"
                       secureTextEntry
                       autoCompleteType={'password'}
                       textContentType={'password'}
                       value={props.firstStep.repeat}
                       onChangeText={text => props.setFirstStep({
                           ...props.firstStep,
                           repeat: text,
                       })}
                       style={styles.inputText}
                       placeholderTextColor="#e9e0e0"
                       borderBottomColor="white"
                />
            </Item>
            {props.firstStep.error.passwordEquals?
                <Text style={styles.inputError}>Password not matching!</Text>
                :
                <></>
            }
        </Form>
    );
}

const styles = StyleSheet.create({
    inputText: {
        color: "white"
    },
    inputError: {
        color: "red",
        marginTop: 10,
        marginLeft: 10
    }
})
