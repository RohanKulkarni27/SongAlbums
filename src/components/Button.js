import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const Button = ({onPress,btntext}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={Style.buttonStyle}>
            <Text style={Style.textStyle}>
            {btntext}
            </Text>
        </TouchableOpacity>
    );
}; 

const Style ={
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5
    },
    textStyle:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'500',
        paddingTop:10,
        paddingBottom:10
    }
}

export default Button;