import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { addFavorite, removeFavorite } from '../redux/actions'
import { FavoritesModal } from './FavoriteModal'

const favorite_icon = '../assets/Image/favoriteIcon.png'
const unfavorite_icon = '../assets/Image/unfavoriteIcon.png'

export class MoviePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            movie: this.props.movie,
            favoritesModal: false
        }
    }

    componentDidMount() {

    }

    isFavorite(favoriteId) {
        console.log(this.props.favorites);
        console.log(this.props.favorites.map(x => x.id).includes(favoriteId));
        if (this.props.favorites.map(x => x.id).includes(favoriteId))
            return true
        else
            return false
    }

    render() {

        return (
            <View style={{ flex: 1, backgroundColor:'#ecebf1' }}>

                {/* ------------ favorites modal -----------  */}
                <FavoritesModal
                    visible={this.state.favoritesModal}
                    favorites={this.props.favorites}
                    favoritesLen={this.props.favorites.length}
                    onClose={() => {
                        this.setState({ favoritesModal: false })
                    }}
                />


                <ScrollView>
                    <View style={{ margin: 20 }}>
                        <Image
                            style={{ height: 300, resizeMode: 'contain' }}
                            source={{ uri: 'https://image.tmdb.org/t/p/w500' + this.state.movie.poster_path }}
                        />
                        <Text style={styles.title}>{this.state.movie.original_title}</Text>

                        <View style={{ flexDirection: 'row', marginStart: 0, alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                            <Image
                                style={{ height: 30, width: 30 }}
                                source={this.isFavorite(this.state.movie.id) ? require(favorite_icon) : require(unfavorite_icon)}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.isFavorite(this.state.movie.id)) {
                                        this.props.removeFavorite(this.state.movie.id);
                                    } else {
                                        this.props.addFavorite(this.state.movie);
                                        this.setState({ favoritesModal: true })
                                    }
                                }}>
                                <Text style={styles.favorite}>{this.isFavorite(this.state.movie.id) ? 'Remove From Favorite' : 'Add To Favorite'}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.description}>Overview : {'\n'}{this.state.movie.overview}{'\n'}</Text>
                            <Text style={styles.description}>Rating: {this.state.movie.vote_average}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    movie: state.movie.movie,
    favorites: state.favorite.allFavorite
})

const mapDispatchToProps = {
    addFavorite,
    removeFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)

export const styles = StyleSheet.create({
    title: { textAlign: 'center', fontSize: 25, color: '#1c1c1c', marginTop: 15, fontWeight: 'bold' },
    description: { fontSize: 20, color: '#1c1c1c' },
    favorite: { marginStart: 5, fontSize: 15, color: '#1c1c1c' }
})