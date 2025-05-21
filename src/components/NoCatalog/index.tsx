import EmptyIllustration from '<assets>/img/svg/EmptyIllustration';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const NoCatalog: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.noCatalogIllustrationWrapper}>
          <EmptyIllustration />
        </View>
        <Text style={styles.noCatalogText}>No Catalog Found</Text>
      </View>
    </View>
  );
};

export default NoCatalog;
