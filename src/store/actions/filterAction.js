export const FIND_USER = 'FIND_USER'
export const onFindUser = (name) => dispatch => {
    dispatch({type: FIND_USER, payload: name})
}