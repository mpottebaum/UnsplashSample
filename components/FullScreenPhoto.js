import React from 'react'
import { connect } from 'react-redux'
import { View, Image, TouchableOpacity, Text, Dimensions } from 'react-native'

const FullScreenPhoto = props => {
    return <View style={{flex: 1}}>
        <TouchableOpacity onPress={props.deselectPhoto}>
            <Text>Back</Text>
        </TouchableOpacity>
        <Image style={{width: Dimensions.get('screen').width, height: '100%'}} source={{uri: props.fullPhotoUrl}} />
    </View>
}

const mapStateToProps = state => {
    return {
        fullPhotoUrl: state.fullPhotoUrl
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deselectPhoto: () => dispatch({type: 'DESELECT_PHOTO'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullScreenPhoto)