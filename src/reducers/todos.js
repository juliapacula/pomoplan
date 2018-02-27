import {actions as calendar} from './calendar'
import {actions as pomoHistory} from './pomoHistory'
import {getMarkedTodos} from "../selectors/todoCards"

export const types = {
    ADD_POMO_DONE: 'ADD_POMO_DONE'
}

const initialState = {
    jduoghru: {
        title: 'Zrobić pracę domową',
        description: "Zadanie 1, 2 i 3 ze strony 67",
        pomoDone: 0,
        pomoDuration: 3,
        project: 'studies',
        tags: ['focus', 'matematykaDyskretna'],
        date: undefined
    },
    jduoghrt: {
        title: 'I did my first todo!',
        description: "This is quite interesting thing!",
        pomoDone: 4,
        pomoDuration: 6,
        project: undefined,
        tags: undefined,
        date: undefined
    },
    jduoghrs: {
        title: 'Napisać email na angielski',
        description: "Temat: co robiłam w wakacje i jakie są moje ulubione formy rozrywki.",
        pomoDone: 1,
        pomoDuration: 5,
        project: 'extra',
        tags: ['work', 'focus'],
        date: undefined
    },
    jduogars: {
        title: 'I did my first todo!',
        description: "This is quite interesting thing!",
        pomoDone: 4,
        pomoDuration: 6,
        project: 'school',
        tags: ['school'],
        date: undefined
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_POMO_DONE:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    pomoDone: state[action.id].pomoDone + 1,
                }
            }
        default:
            return state
    }
}

export const actions = {
    addPomoDone: (id) => ({type: types.ADD_POMO_DONE, id}),
    addPomoDoneAndUpdateCalendar: () => (dispatch, getState) => {
        let ids = getMarkedTodos(getState())
        ids.forEach(id => dispatch(actions.addPomoDone(id)))
        let todosState = getState().todos
        ids.forEach(id => todosState[id].pomoDone === todosState[id].pomoDuration ?
            dispatch(calendar.updateCompletedTodo(id)) : '')
        ids.forEach(id => dispatch(pomoHistory.createPomoObject(id)))
    }
}