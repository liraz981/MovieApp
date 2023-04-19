import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
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
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>

                <TouchableOpacity
                    style={{ backgroundColor: '#add8e6', padding: 30, borderWidth:1 }}
                    onPress={() => {
                        console.log("press");
                        this.props.navigation.navigate("Movies")
                    }}>
                    <Text style={{color:'#1c1c1c', fontSize:30}}>Press for Movie List</Text>
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