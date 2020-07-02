import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, FlatList } from 'react-native'
import { API_ROOT, API_KEY } from '../constants/index'

class User extends React.Component {

    componentDidMount() {
        const url = API_ROOT + `/users/${this.props.selectedUser.username}/photos/?client_id=${API_KEY}`
        fetch(url)
        .then(resp => resp.json())
        .then(photos => this.props.addUserPhotos(photos))
    }

    render() {
        return <View>
            <Image style={{height: 80, width: 80}} source={{uri: this.props.selectedUser.profile_image.large}} />
            <Text>{this.props.selectedUser.username}</Text>
            {
                this.props.loader ?
                <Text>Loading</Text>
                :
                <FlatList
                    data={this.props.selectedUserPhotos}
                    renderItem={({ item }) => <Image style={{height: 200, width: 200}} source={{uri: item.urls.regular}} />}
                    keyExtractor={photo => photo.id}
                    horizontal={false}
                    numColumns={2}
                />
            }
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