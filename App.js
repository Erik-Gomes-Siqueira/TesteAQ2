import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import api from './src/services/api'


const App = () => {
  const [userData, setUserData] = useState([])
  const [username, setUsername] = useState()
  const [isAuth, setIsAuth] = useState()

  
  const user = async () => {
    await api.get('usuarios/usernameGithub')
    .then((response)=> {
      setIsAuth(true)
      const{ avatar_url, name, bio } = response.data
      setUserData({
                    avatar_url,
                    name,
                    bio
                  })
                })
                .catch((err) =>{
                  setIsAuth(false)
                  setUserData({error: err})
              })
              
            }
useEffect(() => user(),[])
const uriImage= userData.avatar_url
    return(
      <View>
        {isAuth ?
              <>
                <Image source={{uri: uriImage}}/>
                <Text>{userData.name}</Text>
                <Text>{userData.bio}</Text>
              </>
            :
              <Text>{`${userData.error}`}</Text>
            
        }
      </View>
    )
  
}

export default App;
