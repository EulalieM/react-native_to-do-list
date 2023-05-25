import { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button } from 'react-native';
import Todo from "../Todo";
import { saveFile, loadFile } from '../../utils/SaveLoad';

export default ({navigation, route}) => {
    
    const [todos, setTodos] = useState([]);

    useEffect(() => { 
        (async () => {
            const loadedTodos = await loadFile()
            setTodos(loadedTodos)
        }) ();
     }, [])

    const [currentTodo,setCurrentTodo] = useState("");

    if(route && route.params) {
        const todo = route.params.todo
        console.log(todo)
    }
    
    const addTodo = () => {
        if(currentTodo.trim() !== ""){
          setTodos([...todos,{text : currentTodo, done : false, description: ""}]);
          setCurrentTodo("");
          saveFile(todos)
        }
    }

    return (
        <View style={{flex: 1, padding: 10}}>
            <ScrollView>
                {todos.map((elem,index) => 
                    <Todo 
                        key={index} 
                        done={elem.done} 
                        text={elem.text} 
                        onToggle={() => {
                            elem.done = !elem.done;
                            setTodos([...todos]);
                            saveFile(todos)
                        }} 
                        onLongPress={() => {
                            navigation.navigate("Détail", {todo: elem, updateTodo: (todo) => {
                                todos[index] = todo
                                setTodos([...todos])
                                saveFile(todos)
                            }})
                        }}
                    />
                )}
            </ScrollView>
            <View>
                <TextInput value={currentTodo} onChangeText={setCurrentTodo} style={styles.todoInput}></TextInput><Button title="Ajouter" onPress={addTodo}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  todoInput : {
    borderWidth : 1,
    borderColor : "#000000",
    borderRadius : 5,
    padding : 8,
    marginBottom : 5,
  }
})