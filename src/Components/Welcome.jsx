import React from 'react'

const Welcome = ({userData}) => {
    const {username,email,password} = userData
  return (
    <div>You have succesfully submitted your data UserName : {username} Email:{email}</div>
  )
}

export default Welcome