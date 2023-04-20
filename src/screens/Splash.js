import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { getAllMovies, setMovie } from '../redux/actions'

export class Splash extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentDidMount() {
        this.props.getAllMovies();
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ecebf1' }}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        console.log("press");
                        this.props.navigation.navigate("Movies")
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.title}>Movie List</Text>
                        <Image
                            style={{ width: 30, height: 30, marginStart: 10 }}
                            source={require('../assets/Image/movieIcon.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    getAllMovies, setMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)

export const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 35,
        color: '#1c1c1c',
        //fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#b0e0e6',
        padding: 30,
        borderWidth: 1,
        borderRadius: 30
    }

})