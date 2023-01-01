/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import type {} from 'react';
import {
  SafeAreaView,
  ScrollView,
  useColorScheme,
  View,
  Text
} from 'react-native';

import InfoTrafic from './components/InfoTrafic';

import {API_KEY} from "@env"

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(API_KEY)


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
        <View
          >
          <InfoTrafic line="ligne R" api_key={API_KEY}></InfoTrafic>
          <InfoTrafic line="ligne 14" api_key={API_KEY}></InfoTrafic>
          <InfoTrafic line="ligne 3" api_key={API_KEY}></InfoTrafic>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
