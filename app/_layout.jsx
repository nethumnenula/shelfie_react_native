import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    
        <Stack screenOptions={{
            headerStyle: {backgroundColor: '#ddd'},
            headerTintColor: '#333'
        }}>
            <Stack.Screen name='index' options={{ title: 'Home'}}/>
            <Stack.Screen name='About' options={{ title: 'About'}}/>
            <Stack.Screen name='Contact' options={{ title: 'Contact'}}/>
        </Stack>
      
  )
}

export default RootLayout

const styles = StyleSheet.create({})