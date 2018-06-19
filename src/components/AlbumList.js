import React, {Component} from 'react';
import {View,Text,ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetails.js';
import axios from 'axios';

class AlbumList extends Component{
    state={albums:[]};
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response =>this.setState({albums:response.data})
        )
        .catch(error => {
            console.log('Error', error);
          });
    }

    renderAlbums(){
      return this.state.albums.map(album=>
          <AlbumDetail key={album.title} album={album} />
        );
    }
    render(){
        return(
        <ScrollView>
          
                {this.renderAlbums()}
         
        </ScrollView>   
        )
    }
}

export default AlbumList;