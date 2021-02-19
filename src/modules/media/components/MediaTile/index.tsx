import React from 'react';
import {
  MediaDescription,
  MediaCard,
  MediaImage,
  MediaMetaContainer,
  MediaTitle,
} from './styles';

interface IProps {
  imageUri?: string;
  title: string;
  description?: string;
  onPress(): void;
}

const MediaTile: React.FC<IProps> = ({
  imageUri,
  title,
  description,
  onPress,
}) => {
  return (
    <MediaCard onPress={onPress}>
      <MediaImage source={{ uri: imageUri }} />
      <MediaMetaContainer>
        <MediaTitle numberOfLines={2}>{title}</MediaTitle>
        <MediaDescription numberOfLines={1}>
          {description || 'Desconhecido'}
        </MediaDescription>
      </MediaMetaContainer>
    </MediaCard>
  );
};

export default MediaTile;
