// @flow weak

import React, {PropTypes} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
});

const Body = (props) => {
  const {
    children,
  } = props;

  return (
    <View style={styles.root}>
      {children}
    </View>
  );
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;
