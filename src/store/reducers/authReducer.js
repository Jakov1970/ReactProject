const initState = {
    authReducer: null
} //ovde pravimo pocetno stanje koje prosledjujemo state-u jer na pocetku nemamo podatke za state, ali mora da se prosledi makar i prazan objekat zbog f-je ispod

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR': 
        console.log('Login error')
        return {
            ...state,
            authError: 'Login failed'
        }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return{
                ...state,
                authError: null
            }
        default: 
            return state;
    }
}

export default authReducer