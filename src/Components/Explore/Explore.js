import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import Album from './../Album/Album';
class Explore extends Component {
    //default state ={};
    state = { albums: [] };
    //This method will be called automatically when this component is rendered
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }))
            .catch(e => console.log(e));
    }
    renderAlbums() {
        return this.state.albums.map(album =>
            <Album key={album.title} record={album} />);
    }
    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
};
export default Explore;