import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id; //ova linija koda uzima iz URL-a ID projekta koji je u path-u. Na primer: ".../project/1". ID ce biti 1. Ova linja samo "cupa" tu jedinicu na kraju
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Neki opis o projektu. Koja tehnologija je koriscena i slicno</p>
                </div>         
                <div className="card-action grey lighten-4 grey text">
                    <div>Posted by Jakov Barton</div>
                    <div>3rd August, 2am</div>
                </div>   
            </div>
        </div>
    )
}

export default ProjectDetails 