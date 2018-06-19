import React, {Component} from 'react';
import {View,Text,Image,Linking} from 'react-native';
import Card from './Cards.js';
import CardSection from './CardSection.js';
import Button from './Button.js';
const AlbumDetail =(props) => {
    return(
        <Card>
            <CardSection>
                    <View style={styles.thumbnailStyling}>
                        <Image 
                            style={styles.imageStyle}
                            source={{uri:props.album.thumbnail_image}}
                        />
                    </View>
                    <View style={styles.headerContainer}>
                    <Text style={styles.textStyle}>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                    </View>
            </CardSection>
            <CardSection>
                <Image style={styles.ImageStyles} source={{uri:props.album.image}}
                />
            </CardSection>
            <CardSection>
                <Button onPress={()=>Linking.openURL(props.album.url)} btntext="Buy Now"/>
            </CardSection>
        </Card>
    );
};

const styles ={
    headerContainer:{
        flexDirection:'column',
        justifyContent:'space-around',
        paddingLeft:5
    },
    textStyle:{
        fontSize:24
    },
    imageStyle:{
        height:50,
        width:50
    },
    thumbnailStyling:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    ImageStyles:{
        height:300,
        flex:1,
        width:null
    }

}

export default AlbumDetail;