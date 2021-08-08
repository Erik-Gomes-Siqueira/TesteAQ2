import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import api from './src/services/api'


const App = () => {
  const [userData, setUserData] = useState([])
  const [username, setUsername] = useState()
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  const user = async () => {
    await api.get('/users/Erik-Gomes-Siqueira')
    .then((response)=> {
      const{ avatar_url, name, bio } = response.data
      setUserData({
        avatar_url,
        name,
        bio
      })
      setIsAuth(true)
      setIsLoading(false)
                })
                .catch((err) =>{
                  setUserData({error: err})
                  setIsAuth(false)
                  setIsLoading(false)
              })
              
            }
  useEffect(() => user(),[])
  if(isLoading){
    return <Text>Aguarde...</Text>
  }
  else{
    return(
      <View>
        {isAuth ?
              <>
                <Image source={{uri: userData.avatar_url}}/>
                <Text>{userData.name}</Text>
                <Text>{userData.bio}</Text>
              </>
            :
              <Text>{`${userData.error}`}</Text>
            
        }
      </View>
    )
  }
  
}

export default App;
