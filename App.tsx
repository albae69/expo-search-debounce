import { StyleSheet, Text, View, FlatList } from 'react-native'
import SearcInput from './SearcInput'
import { useEffect, useState } from 'react'
import { useDebounce } from './useDebounce'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default function App() {
  const [data, setData] = useState<Todo[]>([])

  const [text, setText] = useState('')
  // tunggu 300 milidetik lalu return value
  let seachVal = useDebounce(text, 300)
  console.log('searchVal', seachVal)

  const getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      })
  }

  useEffect(() => {
    getTodos()
  }, [])

  useEffect(() => {
    let filtered = data.filter((item) => item.title.includes(seachVal))
    setData(filtered)
    if (seachVal == '') {
      getTodos()
    }
  }, [seachVal])

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ paddingTop: 24 }} />
      <SearcInput text={text} setText={setText} />
      <View style={{ paddingVertical: 8 }} />
      <FlatList
        contentContainerStyle={{ paddingBottom: 50 }}
        data={data}
        renderItem={({ item }) => (
          <View
            key={item.id}
            style={{
              height: 100,
              backgroundColor: 'lightblue',
              padding: 16,
              marginBottom: 16,
              borderRadius: 16,
            }}>
            <Text style={{ color: 'black' }}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  )
}
