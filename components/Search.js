import React from 'react'
import { connect } from 'react-redux'
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { API_ROOT, API_KEY } from '../constants/index'
import SearchResult from './SearchResult'
import SearchNav from './SearchNav'

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
        this.props.addQuery(this.state.query)
        const url = API_ROOT + `/search/users/?page=1&query=${this.state.query}&client_id=${API_KEY}`
        fetch(url)
        .then(resp => resp.json())
        .then(results => this.props.addResults(results))
    }

    renderResults = () => {
        return this.props.loader ?
            <Text>Loading</Text>
            :
            this.props.results.total === 0 ?
            <Text style={styles.noResultsText}>No Results</Text>
            :
            <FlatList
                data={this.props.results.results}
                renderItem={({ item }) => <SearchResult result={item} />}
                keyExtractor={result => result.id}
            />
    }

    render() {
        return <View style={styles.container}>
            <View style={styles.form}>
                {/* <Text>Search Unsplash Users</Text> */}
                <TextInput style={styles.input} onChange={this.handleChange} value={this.state.query} placeholder='Search Unsplash Users'/>
                <TouchableOpacity style={styles.button} onPress={this.handleSearchPress}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.results}>
                {
                    this.props.results ?
                    this.renderResults()
                    :
                    <Text style={styles.noResultsText}>Search Unsplash Users To See Their Photos</Text>
                }
            </SafeAreaView>
            <SearchNav />
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
        startAddResults: () => dispatch({type: 'START_ADD_RESULTS', page: 1}),
        addResults: results => dispatch({type: 'ADD_RESULTS', results: results}),
        addQuery: query => dispatch({type: 'ADD_QUERY', query: query})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    form: {
        flex: 2,
        backgroundColor: '#EBEEFF'
    },
    results: {
        flex: 6
    },
    input: {
        margin: 10,
        marginTop: 30,
        textAlign: 'center',
        backgroundColor: 'white',
        fontSize: 20,
        padding: 10,
    },
    button: {
        marginLeft: 30,
        marginRight: 30,
        padding: 15,
        backgroundColor: '#8A0705',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },
    noResultsText: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10
    }
})