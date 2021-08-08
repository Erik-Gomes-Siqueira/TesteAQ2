import React,{ useEffect, useState } from 'react'
import api from './services/api'

async function user(){
        await api.get('/users/Erik-Gomes-Siqueira')
            .then((response)=> {
                return(response.data)
            })
            .catch((err) => console.error(err))
    
}


export {
    user
}