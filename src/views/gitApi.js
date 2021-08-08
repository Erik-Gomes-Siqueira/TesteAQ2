import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import api from '../services/api'


export const GitApi = () => {
  const [userData, setUserData] = useState([])
  const [username, setUsername] = useState()
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  const user = async ()=>{
    try {
      const response = await api.get('/users/joaomarcos-exe');
      const{ avatar_url, name, bio } = response.data
      setUserData({
        avatar_url,
        name,
        bio
      })
        setIsAuth(true)
        setIsLoading(false)
    } catch(err) {
      setUserData({error: err})
      setIsAuth(false)
      setIsLoading(false)
    }
  }

  useEffect(() => user(),[])
  if(isLoading){
    return <Text>Aguarde...</Text>
  }
  else{
    return(
      <View style={styles.container}>
        {isAuth ?
              <>
                <Image source={{uri: userData.avatar_url}} style={styles.image}/>
                <Text style={styles.name}>{userData.name}</Text>
                <Text style={styles.bio}>{userData.bio}</Text>
              </>
            :
              <Text style={styles.error}>{`${userData.error}`}</Text>
            
        }
      </View>
    )
  }
  
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

