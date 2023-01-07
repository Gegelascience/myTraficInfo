/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
//import type {} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button
} from 'react-native';

import InfoTrafic from './components/InfoTrafic';

import {API_KEY} from "@env"

const App = () => {
  
  console.log(API_KEY)
  const [lineSeclected, setLineSelected] = useState("ligne R")


  return (
    <SafeAreaView style={{}}>
      <Text
      style={{
        fontSize:25,
        textAlign:"center",
        marginBottom:10
      }}
      >Info Trafic</Text>
      <ScrollView
        style={{}}>
        <View>
          <Button color="#fd6c9e" title="ligne R" onPress={() => {
            setLineSelected("ligne R")
          }}/>
          <Button color="#841584" title="ligne 14" onPress={() => {
            setLineSelected("ligne 14")
          }}/>
          <Button title="ligne 3" onPress={() => {
            setLineSelected("ligne 3")
          }}/>
          <Button color="red" title="ligne A" onPress={() => {
            setLineSelected("ligne A")
          }}/>
          <Button color="yellow" title="ligne 1" onPress={() => {
            setLineSelected("ligne 1")
          }}/>
          <InfoTrafic line={lineSeclected} api_key={API_KEY}></InfoTrafic>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
