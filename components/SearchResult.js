import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'

class SearchResult extends React.Component {
    
    render() {
        return <TouchableOpacity>
            <Image style={{height: 80, width: 80}} source={{uri: this.props.result.profile_image.large}} />
            <Text>{this.props.result.username}</Text>
            <Text>{this.props.result.total_photos} Photos</Text>
        </TouchableOpacity>
    }
}

export default SearchResult