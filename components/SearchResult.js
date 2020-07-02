import React from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity, Text, Image, View, StyleSheet, Dimensions } from 'react-native'
import { withRouter } from 'react-router-native'

class SearchResult extends React.Component {

    handlePress = () => {
        this.props.selectUser(this.props.result)
        this.props.startAddUserPhotos()
        this.props.history.push('/user')
    }
    
    render() {
        return <TouchableOpacity onPress={this.handlePress} style={styles.container}>
            <Image style={{height: 80, width: 80}} source={{uri: this.props.result.profile_image.large}} />
            <View style={styles.info}>
                <Text>{this.props.result.username}</Text>
                <Text>{this.props.result.total_photos} Photos</Text>
            </View>
        </TouchableOpacity>
    }
}

const mapDisptachToProps = dispatch => {
    return {
        selectUser: user => dispatch({type: 'SELECT_USER', user: user}),
        startAddUserPhotos: () => dispatch({type: 'START_ADD_USER_PHOTOS'})
    }
}

const SearchResultWithRouter = withRouter(SearchResult)

export default connect(null, mapDisptachToProps)(SearchResultWithRouter)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('screen').width / 2
    },
    info: {

    }
})