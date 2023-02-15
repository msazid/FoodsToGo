import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantInfoCard = styled(Card)`
        background-color: ${(props) => props.theme.colors.ui.quaternary};
        border-radius:${(props) => props.theme.space[0]};
    `;
const Image = styled(Card.Cover)`
        padding: ${(props) => props.theme.space[3]};
        background-color: ${(props) => props.theme.colors.ui.quaternary};
        border-radius:${(props) => props.theme.space[0]};
    `;
const Title = styled(Text)`
        font-size:${(props) => props.theme.fontSizes.title};
        font-family:${(props) => props.theme.fonts.heading}
        color:${(props) => props.theme.colors.ui.primary};
        background-color: ${(props) => props.theme.colors.ui.quaternary};
    `;
const Content = styled(Text)`
        font-size:${(props) => props.theme.fontSizes.caption};
        font-family:${(props) => props.theme.fonts.body}
        color:${(props) => props.theme.colors.ui.primary};
        background-color: ${(props) => props.theme.colors.ui.quaternary};
    `;
const Info = styled.View`
        padding:${(props) => props.theme.space[3]};
    `;
const Rating = styled.View`
    flex-direction:row;
    padding-top:${(props) => props.theme.space[2]};
    padding-bottom:${(props) => props.theme.space[2]};
    `;
const Section = styled.View`
    flex-direction: row;
    align-items:center;

`
const SectionEnd = styled.View`
    flex:1;
    flex-direction:row;
    justify-content:flex-end;
`

export const RestaurantCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon,
        photos = ["https://cdn.sortiraparis.com/images/80/95878/693086-photos-mohamed-cheikh-top-chef-2021-a-la-pagode-de-cos-de-la-reserve.jpg"],
        address = '1001 Some random Street',
        isOpen = true,
        openingHours = 10,
        rating = 3.5,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <RestaurantInfoCard elevation={5}>
            <Image key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Section>
                    <Rating>{
                        ratingArray.map(() => (<SvgXml xml={star} width={20} height={20} />))
                    }
                    </Rating>
                    <SectionEnd>
                        {
                            isClosedTemporarily && <Text variant='label' style={{ color: 'red' }}>Closed</Text>
                        }
                        {
                            isOpen && <SvgXml xml={open} width={20} height={20} />
                        }

                    </SectionEnd>
                </Section>
                <Content>{address}</Content>
            </Info>
        </RestaurantInfoCard>
    );
}
