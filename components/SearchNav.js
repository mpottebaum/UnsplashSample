import React from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'
import { API_ROOT, API_KEY } from '../constants/index'

class SearchNav extends React.Component {

    handlePress = direction => {
        const page = direction === 'next' ? this.props.searchPage + 1 : this.props.searchPage - 1
        this.props.startAddResults(page)
        const url = API_ROOT + `/search/users/?page=${page}&query=${this.props.query}&client_id=${API_KEY}`
        fetch(url)
        .then(resp => resp.json())
        .then(results => this.props.addResults(results))

    }

    render() {
        return <View style={styles.container}>
            <View style={styles.navContainer}>
                {
                    this.props.searchPage === 1 ?
                    null
                    :
                    <TouchableOpacity onPress={() => this.handlePress('prev')} style={styles.button}>
                        <Text style={styles.text}>Previous Page</Text>
                    </TouchableOpacity>
                }
            </View>
            <View style={styles.navContainer}>
                {
                    this.props.searchPage === this.props.results.total_pages ?
                    null
                    :
                    <TouchableOpacity onPress={() => this.handlePress('next')} style={styles.button}>
                        <Text style={styles.text}>Next Page</Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    }
}

const mapStateToProps = state => {
    return {
        searchPage: state.searchPage,
        results: state.results,
        query: state.query
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAddResults: page => dispatch({type: 'START_ADD_RESULTS', page: page}),
        addResults: results => dispatch({type: 'ADD_RESULTS', results: results})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchNav)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    navContainer: {
        flex: 1
    },
    button: {
        width: Dimensions.get('screen').width / 2,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20,
        backgroundColor: '#FDD8D8'
    },
    text: {
        textAlign: 'center',
        fontSize: 15
    }
})