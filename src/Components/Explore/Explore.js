import React,{Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
class Explore extends Component{
    //default state ={};
    state ={ albums:[]};
    //This method will be called automatically when this component is rendered
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums:response.data}))
        .catch(e => console.log(e));
    }
    renderAlbums(){
        return this.state.albums.map(album => <Text>{album.title}</Text>);
    }
    render(){
        console.log(this.state);
        return(
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
};
export default Explore;