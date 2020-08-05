import React, {Component} from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase' //treba nam za konekciju na bazu kako bi se izlistali svi projekti iz baze na stranici
import { compose } from 'redux'

class Dashboard extends Component {
    render() {
        //console.log(this.props);
        const {projects} = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"> 
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">       
                        <Notifications />         
                    </div>
                </div>           
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects //ovo smo promenili. Sada pristupa bazi, ne koristi vise dummy data
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'} //ovde mu kazemo koju kolekciju zeli da uzme. Uvek ce da update-uje state pri svakoj promeni jer ce to da vidi
    ])
)(Dashboard)

//umesto export default connect(mapStateToProps)(Dashboard)
//koristimo compose da bi konektovali dve funkcije