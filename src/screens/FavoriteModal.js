import React, { Component } from 'react'
import { StyleSheet, View, Image, Modal, TouchableOpacity, Text, Dimensions, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';

export const FavoritesModal = ({ visible, favorites, favoritesLen, onClose }) => {
    
    return (
        <Modal
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                onClose()
            }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#1c1c1c', opacity: 0.90, flex: 1, alignItems: 'center' }}>
                    <View style={{ flex: 1, backgroundColor: '#fefefe', paddingHorizontal: 20, marginVertical: 50 }}>
                        <TouchableOpacity
                            style={{ alignSelf: 'center', marginTop: 15 }}
                            onPress={() => {
                                onClose()
                            }}
                        >
                            <Image
                                style={{ width: 30, height: 30, borderRadius: 30, backgroundColor: '#1c1c1c' }}
                                source={require('../assets/Image/xIcon.png')}
                            />
                        </TouchableOpacity>
                        <Text style={styles.title}>My Favorites({favoritesLen}):</Text>

                        {favorites ?
                            <FlatList
                                data={favorites}
                                renderItem={({ item }) => FavoriteItem(item)}
                                keyExtractor={item => item.id}
                                key={item => item.Id}
                                contentContainerStyle={{ marginVertical: 20 }}
                            />
                            :
                            []
                        }

                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    )

}


FavoriteItem = (movie) => {
    let imgUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

    return (
        <View key={movie.id} style={styles.favoriteContainer}>
            <Image
                style={{ height: 70, width: 40 }}
                source={{ uri: imgUrl }}
            />
            <Text style={styles.favoriteTitle}>{movie.original_title}</Text>
        </View>
    )
}

export const styles = StyleSheet.create({

    title: { textAlign: 'center', fontSize: 25, color: '#1c1c1c', marginTop: 15, fontWeight: 'bold' },
    favoriteContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 5, borderWidth: 1, borderColor: '#dcdcdc', padding: 5, },
    favoriteTitle: { textAlign: 'center', fontSize: 15, color: '#1c1c1c', fontWeight: 'bold', marginStart: 5 }
})