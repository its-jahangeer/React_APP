import React from 'react';
import { View,Text,Pressable } from 'react-native';
import {styles} from './styles';

const styledButton = (props)=>{

     const type = props.type;
      const backgroundColor = type === 'primary'? 'black' : 'white';

    return (
     <View style={styles.container}>
         <Pressable style={styles.button}
         onPress={()=>{
             console.warn('Hey there');
         }
         }>
        <Text style={styles.text}>Custom Order</Text>
         </Pressable>
     </View>
    );
};
export default styledButton;