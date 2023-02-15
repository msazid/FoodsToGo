import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const RestaurantInfoCard = styled(Card)`
    background-color: white;
    border-radius:0px;
`
const Image = styled(Card.Cover)`
    padding: 20px;
    background-color: white;
    width:100%;
    border-radius:0px;
`
const Title = styled(Text)`
    padding:16px;
    color:red;
    background-color:white;
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
        <RestaurantInfoCard elevation={5}>
            <Image key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantInfoCard>
    );
}
