import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { API_ROOT } from '../constants/index'
import SearchResult from './SearchResult'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            query: ''
        }
    }

    handleChange = e => {
        this.setState({
            query: e.nativeEvent.text
        })
    }

    handleSearchPress = () => {
        this.props.startAddResults()
        const url = API_ROOT + `/search/users/?page=1&query=${this.state.query}&client_id=aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5`
        fetch(url)
        .then(resp => resp.json())
        .then(results => this.props.addResults(results))
    }

    renderResults = () => {
        return this.props.loader ?
            <Text>Loading</Text>
            :
            <FlatList
                data={this.props.results.results}
                renderItem={({ item }) => <SearchResult result={item} />}
                keyExtractor={result => result.id}
            />
    }

    render() {
        return <View>
            <View>
                <Text>Search Unsplash Users</Text>
                <TextInput onChange={this.handleChange} value={this.state.query} />
                <TouchableOpacity onPress={this.handleSearchPress}>
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>
            <View>
                {
                    this.props.results ?
                    this.renderResults()
                    :
                    <Text>Search Unsplash Users To See Their Photos</Text>
                }
            </View>
        </View>
    }
}

const mapStateToProps = state => {
    return {
        results: state.results,
        loader: state.loader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAddResults: () => dispatch({type: 'START_ADD_RESULTS'}),
        addResults: results => dispatch({type: 'ADD_RESULTS', results: results})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)