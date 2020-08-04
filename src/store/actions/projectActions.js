export const createProject = (project) => {
    return(dispatch, useState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project, 
            authorFirstName: 'Jakov',
            authorLastName: 'Barton',
            authorId: 12345,
            createdAt: new Date()
        }).then( ()=> {
            dispatch({ type: 'CREATE_PROJECT', project});
        }).catch( (err)=> {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        })

    }
};