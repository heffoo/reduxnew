export const delTask = (id) => {
        return {
        type: 'DELETE_TODOS',
        id: id,
        }
    }
    export const addTask = (task) => {
        return {
        type: "ADD_TODOS",
        text: task, 
    }
    }
    export const checkedTask = () => {
        return {
            type: "CHECKED_TASK"
        }
    }
    export const toggleCheck = (index) => {
            return {
                type: "TOGGLE_CHECK", 
                id: index,
            }
    }
