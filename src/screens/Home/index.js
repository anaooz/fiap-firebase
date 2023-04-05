import { useState } from "react"
import { Alert, Keyboard, KeyboardAvoidingView } from "react-native"
import { Container, Body, List, ContainerList, Title, Icon, Form, InputTast } from "./styles"
import { IonIcons, MaterialIcons } from "@expo/vector-icons"

export default function Home() {
  const [task, setTask] = useState('Fazer miojo', 'Rodrigar')
  const [newTast, setNewTask] = useState('')

  async function addTask() {
    setTask([...task, newTask])
    setNewTask('')

    Keyboard.dismiss()
  }

  async function removeTask(item) {
    Alert.alert("Deletar tarefa", "Tem certeza que deseja deletar essa tarefa?",
    [
      {
        text: "Cancelar",
        onPress: () => {
          return
        }
      },
      {
        text: "Ok",
        onPress: () => setTask(task.filter(tasks => tasks !== item))
      }
    ],
    {cancelable: false}
    )
  }

  return(
    <KeyboardAvoidingView
    keyboardVerticalOffset={0}
    behavior="padding">
      <Container>
        <Body>
          <List
          data={task}
          key={item => item.toString()}
          renderItem={({ item }) => {
            <ContainerList>
              <Title>{item}</Title>
              <Icon onPress={() => removeTask(item)}>
                <MaterialIcons
                name="delete-forever"
                size={25}
                color="#f64c75"/>
              </Icon>
            </ContainerList>
          }}/>
        </Body>
        <Form>
          <InputTask/>
        </Form>
      </Container>
    </KeyboardAvoidingView>
  )
}