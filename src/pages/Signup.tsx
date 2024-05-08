import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { ScreenProps } from '../interfaces';
import * as Styles from '../styles';
const Signup: React.FC<ScreenProps<'Signup'>> = ({ navigation }) => {
  const commonStyles = Styles.CommonStyles();

  return (
    <View style={commonStyles.AppContainer}>
      <Text style={commonStyles.redColor}>Signup</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={commonStyles.CommonButton}
      >
        <Text>Signup</Text>
      </Pressable>
    </View>
  );
};

export default Signup;
