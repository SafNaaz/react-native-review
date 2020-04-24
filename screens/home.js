import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global'
import Card from '../shared/card'

export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        { title: 'bla bla', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'blu blu', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'ble ble', rating: 3, body: 'lorem ipsum', key: '3' }
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}