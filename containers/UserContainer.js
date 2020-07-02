import React from 'react'
import { connect } from 'react-redux'
import { API_ROOT, API_KEY } from '../constants/index'
import User from '../components/User'
import FullScreenPhoto from '../components/FullScreenPhoto'

class UserContainer extends React.Component {

    componentDidMount() {
        const url = API_ROOT + `/users/${this.props.selectedUser.username}/photos/?client_id=${API_KEY}`
        fetch(url)
        .then(resp => resp.json())
        .then(photos => this.props.addUserPhotos(photos))
    }

    render() {
        return this.props.fullPhotoUrl ?
            <FullScreenPhoto />
            :
            <User />
    }
}

const mapStateToProps = state => {
    return {
        selectedUser: state.selectedUser,
        fullPhotoUrl: state.fullPhotoUrl
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUserPhotos: photos => dispatch({type: 'ADD_USER_PHOTOS', photos: photos})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)