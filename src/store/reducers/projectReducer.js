const initState = {
    projects: [
        {id:'1', title:"React project", content:"Opis projekta 1"},
        {id:'2', title:"Angular project", content:"Opis projekta 2"},
        {id:'3', title:"Vue project", content:"Opis projekta 3"}
    ]
} 

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT' : 
            console.log('project created', action.project)
    }
    return state
}

export default projectReducer