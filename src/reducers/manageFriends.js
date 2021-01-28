export function manageFriends(state={friends: []}, 
    action){
    switch(action.type) {
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            const removeFriend = state.friends.map(remove => remove.id)
            return {
                ...state, friends: state.friends.filter(friend => friend.id !== removeFriend)
            }
        default:
            return state;
    }
}

