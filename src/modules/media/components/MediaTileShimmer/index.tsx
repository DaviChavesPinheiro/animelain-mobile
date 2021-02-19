import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const MediaTileShimmer: React.FC = () => {
  return (
    <ShimmerPlaceHolder
      LinearGradient={LinearGradient}
      style={{
        borderRadius: 3,
        width: 100,
        height: 200,
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 10,
      }}
      shimmerColors={['#1e1e1e', '#2a2a2a', '#1e1e1e']}
    />
  );
};

export default MediaTileShimmer;
