import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import ImageUpload from "./second_step/ImageUpload";
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import FirstStep from "../containers/FirstStepContainer";
import ThirdStep from "./third-step/ThirdStep";


export default function Stepper(props) {

    const [selectedImage, setSelectedImage] = useState(null);


    return (
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <ProgressSteps
                activeStepIconBorderColor={"#33e3e3"}
                activeStepNumColor={"#ffffff"}
                labelColor={"#33e3e3"}
                activeLabelColor={"#33e3e3"}
                progressBarColor={"#33e3e3"}
                disabledStepIconColor={"#33e3e3"}
            >
                <ProgressStep
                    label="First Step"
                    onNext={() => props.checkFirstStepValidity(props.firstStep)}
                    errors={props.firstStep.error.hasError}
                    nextBtnTextStyle={styles.nextBtnStyle}
                >
                    <View>
                        <FirstStep/>
                    </View>
                </ProgressStep>
                <ProgressStep label="Second Step" previousBtnTextStyle={styles.nextBtnStyle} nextBtnTextStyle={styles.nextBtnStyle}>
                    <View style={{alignItems: 'center'}}>
                        <ImageUpload selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
                    </View>
                </ProgressStep>
                <ProgressStep label="Third Step" previousBtnTextStyle={styles.nextBtnStyle} nextBtnTextStyle={styles.nextBtnStyle}>
                    <View>
                        <ThirdStep/>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#154b95",
    },
    nextBtnStyle: {
        color: "#fffcfc",
        backgroundColor:"#33e3e3",
        padding:15,
        borderRadius: 10
    }
});


