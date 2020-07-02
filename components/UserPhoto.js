import React from 'react'
import { connect } from 'react-redux'
import { Image, TouchableOpacity } from 'react-native'

const UserPhoto = props => {
    return <TouchableOpacity onPress={() => props.selectPhoto(props.photo.urls.full)}>
        <Image style={{height: 200, width: 200}} source={{uri: props.photo.urls.regular}} />
    </TouchableOpacity>
}

const mapDispatchToProps = dispatch => {
    return {
        selectPhoto: url => dispatch({type: 'SELECT_PHOTO', url: url})
    }
}

export default connect(null, mapDispatchToProps)(UserPhoto)