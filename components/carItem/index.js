import React from 'react';
import { View,Text,ImageBackground} from 'react native';
import { StyledButton } from "./styledButton";
import {styles} from './styles';

const carItem = (props)=>{
    return (
        <View style={styles.carContainer}>
     
        <ImageBackground source={require('./assets/images/car1.jpg')}
         style={styles.image}
         />
         <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>
        <StyledButton type="secondary"/>
        </View>
    );
};
export default carItem;