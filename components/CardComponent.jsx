import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Icon, Text, Card, CardItem } from 'native-base';
const image = require('../assets/background2.png');
const logo = require('../assets/logo.png');
import ImageBlurLoading from 'react-native-image-blur-loading';
export default function CardComponent({ navigation, content }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailPage', { content: content});
      }}
      style={styles.container}
    >
      <Card style={styles.card} >
        <CardItem style={{ backgroundColor: "#00546c" }}>
          <ImageBlurLoading
            withIndicator
            thumbnailSource={{ uri: content.image }}
            source={{ uri: content.image }}
            style={styles.image}
          />
        </CardItem>
        <CardItem style={{ marginTop: -9 }}>
          <Grid>
            <Col size={9}>
              <Text numberOfLines={1} style={styles.title}>
                {content.title}
              </Text>              
            </Col>
           
          </Grid>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#00546c", alignItems: 'center', alignSelf: 'center' },
  card: {
    backgroundColor: "#00546c",
    width: '90%',
    alignSelf: 'center',
  },
  image: { backgroundColor: "#00546c", height: 200, width: '100%', borderRadius: 10 },
  grey: { color: 'grey' },
  title: { fontWeight: '700', fontSize: 20, marginLeft: 10 },
});