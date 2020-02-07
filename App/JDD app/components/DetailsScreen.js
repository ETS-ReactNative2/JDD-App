import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import { HomeScreen } from './HomeScreen';
var styles = require('../style');

export function DetailsScreen() {
    return (
      <View style={styles.supercontainer}>
  
          <View style={styles.searchBox}>
            <TouchableOpacity style={styles.aBtntext}><Text style={styles.texB}>Search</Text></TouchableOpacity>
            <TouchableOpacity style={styles.searchF}><TextInput style={styles.texB}/></TouchableOpacity>
          </View>
  
          <View style={styles.buttoncontainerB}>
            <TouchableOpacity style={styles.aBtntext}><Text style={styles.texB}>State Bank of India</Text></TouchableOpacity>
            <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Nav</Text></TouchableOpacity>
            <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Call</Text></TouchableOpacity>
            <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>+</Text></TouchableOpacity>
            <Text style={styles.disB}>90m</Text>
          </View>
  
  
          <View style={styles.buttoncontainerB}>
            <TouchableOpacity style={styles.aBtntext}><Text style={styles.texB}>ICICI Bank ATM</Text></TouchableOpacity>
            <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Nav</Text></TouchableOpacity>
            <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Call</Text></TouchableOpacity>
            <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>+</Text></TouchableOpacity>
            <Text style={styles.aBtndist}>1.8k</Text>
          </View>
  
  
        </View>
      );
  }
  

