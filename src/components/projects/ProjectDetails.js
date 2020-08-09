import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = (props) => {
    //const id = props.match.params.id;    Ova linija koda uzima iz URL-a ID projekta koji je u path-u. Na primer: ".../project/1". ID ce biti 1. Ova linja samo "cupa" tu jedinicu na kraju
    const { project, auth } = props;
    if(!auth.uid) return <Redirect to='/signin'/>

    if(project){
        return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{project.title}</span>
                    <p>{project.content}</p>
                </div>         
                <div className="card-action grey lighten-4 grey text">
                    <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                    <div>{moment(project.createdAt.toDate()).calendar()}</div>
                </div>   
            </div>
        </div>
        )
    } 
    else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
            )
    }    
}

const mapStateToProps = (state, ownProps) => {              //ownProps je ustvari props pre nego sto se izvrsi ova f-ja
    //console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null                 //koristimo konstante projects i id kako bismo izvukli odredjeni projekat iz baze
    return {
        project: project,                                    //to je const project od iznad
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(ProjectDetails)