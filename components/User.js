import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, FlatList } from 'react-native'
import UserPhoto from './UserPhoto'

class User extends React.Component {
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
                    renderItem={({ item }) => <UserPhoto photo={item} />}
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

export default connect(mapStateToProps)(User)