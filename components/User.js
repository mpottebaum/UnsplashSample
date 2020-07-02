import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-native'
import { View, SafeAreaView, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import UserPhoto from './UserPhoto'

class User extends React.Component {
    render() {
        return <View style={styles.container}>
            <View style={styles.info}>
                <Image style={styles.profileImg} source={{uri: this.props.selectedUser.profile_image.large}} />
                <Text style={styles.username}>{this.props.selectedUser.username}</Text>
                <TouchableOpacity style={styles.backButton} onPress={() => this.props.history.push('/')}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.gallery}>
                {
                    this.props.loader ?
                    <ActivityIndicator size="large" color="#EBEEFF" />
                    :
                    <FlatList
                        data={this.props.selectedUserPhotos}
                        renderItem={({ item }) => <UserPhoto photo={item} />}
                        keyExtractor={photo => photo.id}
                        horizontal={false}
                        numColumns={2}
                    />
                }
            </SafeAreaView>
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

const UserWithRouter = withRouter(User)

export default connect(mapStateToProps)(UserWithRouter)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profileImg: {
        height: 80,
        width: 80,
        alignSelf: 'center'
    },
    username: {
        alignSelf: 'center',
        fontSize: 25
    },
    backButton: {
        alignSelf: 'center'
    },
    backButtonText: {
        fontSize: 15
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#EBEEFF'
    },
    gallery: {
        flex: 6
    }
})