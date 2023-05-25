import * as Filesystem from 'expo-file-system'

const FILE_URI = Filesystem.documentDirectory + "todos.json"

export const loadFile = async () => {
    const info = await Filesystem.getInfoAsync(FILE_URI)
    if (info.exists) {
        const jsonData = await Filesystem.readAsStringAsync(FILE_URI)
        return JSON.parse(jsonData)
    } 
    else {
        return []
    }
}

export const saveFile = async (todos) => {
    await Filesystem.writeAsStringAsync(FILE_URI, JSON.stringify(todos))
}
