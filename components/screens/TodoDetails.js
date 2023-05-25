import { View, Text, TextInput, StyleSheet } from "react-native";
import Todo from "../Todo.js";
import { useState } from "react";

export default ({navigation, route}) => {

    if(!route || !route.params) {
        navigation.navigate("Ma to do list")
    }

    const [todo, setTodo] = useState(route.params.todo)

    const updateTodo = route.params.updateTodo

    const onToggle = () => {
        todo.done = !todo.done
        setTodo({...todo})
        updateTodo({...todo})
    }

    const onChangeDesc = (val) => {
        todo.description = val
        setTodo({...todo})
        updateTodo({...todo})
    }

    return (
        <View style={{flex:1, padding:5}}>
            <Todo done={todo.done} 
                text={todo.text} 
                onToggle={onToggle} 
            />
            <TextInput 
                style={styles.input} 
                multiline 
                value={todo.description} 
                onChangeText={onChangeDesc} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        flex: 1,
        borderWidth : 1,
        borderColor : "#000000",
        borderRadius : 5,
        padding : 8,
        marginBottom : 5,
        textAlignVertical: "top"
      }
})