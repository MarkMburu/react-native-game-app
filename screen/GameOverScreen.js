import React from 'react'
import {View,Text,StyleSheet,Button} from "react-native";

function GameOverSCreen(props) {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!!!!</Text>
            <Text>Number of Rounds: {props.roundsNumber}</Text>
            <Text>The Number was: {props.userNumber}</Text>
            <Button title="New Game" onPress={props.configureNewGameHandler}/>
        </View>
    )
}
const styles = StyleSheet.create({
 screen:{
     flex: 1,
     justifyContent:"center",
     alignItems: "center"
 }
});

export default GameOverSCreen
