import React, { Component } from 'react'
import { Text, View, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { setMovie } from '../redux/actions'

export class Movies extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ecebf1' }}>

                <FlatList
                    data={this.props.allMovies}
                    renderItem={({ item }) => this.MovieItem(item)}
                    keyExtractor={item => item.id}
                    key={item => item.Id}
                    contentContainerStyle={{ marginHorizontal: 20 }}
                />

            </View>
        )
    }

    MovieItem(movie) {
        let imgUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

        return (
            <View key={movie.id} style={styles.movieContainer}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.setMovie(movie.id);
                        this.props.navigation.navigate("MoviePage");
                    }}>
                    <View style={{}}>
                        <Image
                            style={{ height: 200, resizeMode: 'contain' }}
                            source={{ uri: imgUrl }}
                        />
                        <Text style={styles.title}>{movie.original_title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}



const mapStateToProps = (state) => ({
    allMovies: state.movie.allMovies
})

const mapDispatchToProps = {
    setMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)

export const styles = StyleSheet.create({
    title: { textAlign: 'center', fontSize: 20, color: '#1c1c1c', fontWeight: 'bold', marginTop: 5 },
    movieContainer: { marginVertical: 20, borderWidth: 2, borderColor: '#d3d3d3', padding: 5, borderRadius: 20 },

})