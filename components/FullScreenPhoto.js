import React from 'react'
import { connect } from 'react-redux'
import { View, Image, TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native'

const FullScreenPhoto = props => {
    return <View style={{flex: 1}}>
        <TouchableOpacity style={styles.button} onPress={props.deselectPhoto}>
            <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
        <Image style={styles.image} source={{uri: props.fullPhotoUrl}} />
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

const styles = StyleSheet.create({
    button: {
        padding: 10
    },
    text: {
        textAlign: 'center',
        fontSize: 15
    },
    image: {
        width: Dimensions.get('screen').width,
        height: '100%'
    }
})