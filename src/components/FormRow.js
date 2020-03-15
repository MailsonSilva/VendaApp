import React from 'react';
import {View, StyleSheet} from 'react-native';

const FormRow = props => {
  const {children, first, last} = props;
  return (
    <View
      style={[
        styles.container,
        first ? styles.first : null,
        last ? styles.last : null,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#113063',
  },
  first: {
    marginTop: 50,
  },
  last: {
    marginBottom: 5,
  },
});

export default FormRow;
