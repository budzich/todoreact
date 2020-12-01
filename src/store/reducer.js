const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    value: action.value,
                    date: action.date,
                    favorite: false,
                    complete: false,
                }
            ];
        case 'CHANGE_TODO':
            return state.map((todo, index) => {
                if (index === action.id) {
                    return { ...todo, value: action.value }
                }
                return todo;
            });
        case 'FAVORITE_TODO':
            return state.map((todo, index) => {
                if (index === action.id) {
                    return { ...todo, favorite: !todo.favorite }
                }
                return todo;
            });
        case 'COMPLETE_TODO':
            return state.map((todo, index) => {
                if (index === action.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo;
            });
        case 'DELETE_TODO':
            return state.filter((todo, index) => (index !== action.id));
        default:
            return state;
    }
}

export default reducer;
