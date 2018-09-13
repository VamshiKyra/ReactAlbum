import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './../Card/Card';
import CardSection from './../CardSection/CardSection';
import Button from './../Button/Button';
const Album = ({ record }) => {
    const { title, artist, thumbnail_image, image, url } = record;
    const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle} >
                    <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image source={{ uri: image }} style={imageStyle} />
            </CardSection>

            <CardSection>
                <Button whenPress={() => Linking.openURL(url)}  >
                    BUY NOW
                </Button>
            </CardSection>
        </Card>
    );
};
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }

};
export default Album;