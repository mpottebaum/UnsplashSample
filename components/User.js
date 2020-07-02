import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { API_ROOT, API_KEY } from '../constants/index'

class User extends React.Component {

    componentDidMount() {
        const url = API_ROOT + `/users/${this.props.selectedUser.username}/photos/?client_id=${API_KEY}`
        fetch(url)
        .then(resp => resp.json())
        .then(photos => this.props.addUserPhotos(photos))
    }

    render() {
        console.log(this.props.selectedUserPhotos)
        return <View>
            <Text>User</Text>
        </View>
    }
}

const mapStateToProps = state => {
    return {
        selectedUser: state.selectedUser,
        selectedUserPhotos: state.selectedUserPhotos,
        loader: state.loader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUserPhotos: photos => dispatch({type: 'ADD_USER_PHOTOS', photos: photos})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)