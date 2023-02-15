import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const Title = styled.Text`
    padding:16px;
    color:red;
`;

export const RestaurantCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon,
        photos = ["https://cdn.sortiraparis.com/images/80/95878/693086-photos-mohamed-cheikh-top-chef-2021-a-la-pagode-de-cos-de-la-reserve.jpg"],
        address = '1001 Some random Street',
        isOpen = true,
        openingHours = 10,
        rating = 4.5,
        isClosedTemporarily = true,
    } = restaurant;
    return (
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
            <Card.Content >
                <Title>
                    {name}
                </Title>
            </Card.Content>
        </Card>
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 0
    },
    cover: {
        padding: 20,
        borderRadius: 0,
        backgroundColor: 'white'
    }
})