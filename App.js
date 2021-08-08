import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import {GitApi} from './src/views/gitApi'
import {Wifi} from './src/views/Wifi'


const App = () => {
  return(
    <Wifi/>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  image:{
    width: 300, 
    height: 300,
    borderRadius: 150
  },
  name:{
    fontSize: 25,
    fontWeight: 'bold'
  },
  bio:{
    fontSize: 18,
  },
  error:{
    fontSize: 25,
    fontWeight: 'bold'
  },
})

export default App;
