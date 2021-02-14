import React from 'react';

import { View, ActivityIndicator } from 'react-native';

const Loading: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
      }}
    >
      <ActivityIndicator size="large" color="#efefef" />
    </View>
  );
};

export default Loading;
