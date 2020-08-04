export const createProject = (project) => {
    return(dispatch, useState) => {
        dispatch({ type: 'CREATE_PROJECT', project});
    }
}