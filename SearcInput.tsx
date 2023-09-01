import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function SearcInput({ text, setText }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search'
        style={styles.input}
        value={text}
        onChangeText={(txt) => setText(txt)}
      />
      {/* ganti dengan image dan icon search nya */}
      <View style={styles.ic_search} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
  },
  ic_search: {
    height: 30,
    width: 30,
    backgroundColor: 'lightgray',
    borderRadius: 30,
    marginLeft: 8,
  },
})
