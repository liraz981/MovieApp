import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

export class MoviePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            movie: this.props.movie
        }
    }

    componentDidMount() {

    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ margin: 20 }}>
                    <Image
                        style={{ height: 300, resizeMode: 'contain' }}
                        source={{ uri: 'https://image.tmdb.org/t/p/w500' + this.state.movie.poster_path }}
                    />

                    <Text style={styles.title}>{this.state.movie.original_title}</Text>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.description}>Overview : {'\n'}{this.state.movie.overview}{'\n'}</Text>
                        <Text style={styles.description}>Rating: {this.state.movie.vote_average}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    movie: state.movie.movie
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)

export const styles = StyleSheet.create({
    title: { textAlign: 'center', fontSize: 25, color: '#1c1c1c', marginTop: 15,fontWeight:'bold' },
    description: { fontSize: 20, color: '#1c1c1c' }
})