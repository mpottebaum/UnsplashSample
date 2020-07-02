import React from 'react'
import { connect } from 'react-redux'
import { Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'

const UserPhoto = props => {
    return <TouchableOpacity onPress={() => props.selectPhoto(props.photo.urls.full)}>
        <Image style={styles.image} source={{uri: props.photo.urls.regular}} />
    </TouchableOpacity>
}

const mapDispatchToProps = dispatch => {
    return {
        selectPhoto: url => dispatch({type: 'SELECT_PHOTO', url: url})
    }
}

export default connect(null, mapDispatchToProps)(UserPhoto)

const styles = StyleSheet.create({
    image: {
        height: Dimensions.get('screen').width / 2,
        width: Dimensions.get('screen').width / 2,
    }
})