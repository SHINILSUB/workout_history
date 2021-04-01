import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Icon, Text } from "native-base";
import CardComponent from "../components/CardComponent";
import HeaderComponent from "../components/HeaderComponent";
import * as Animatable from "react-native-animatable";
import { getData } from "../config/firebaseFunctions";
import { FlatList } from "react-native-gesture-handler";
const data = require("../data.json");
const background2 = require("../assets/background2.png");
export default function MainPage({ navigation }) {
  const [data, setData] = useState([]);
  const [next, setNext] = useState(0);

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
    readyData();
  }, []);
  const readyData = async () => {
    const data = await getData(setNext);
    setData(data);
  };

  console.log(data);
  return (
    <Container style={styles.container}>
      <HeaderComponent />

      <FlatList
        data={data}
        ListHeaderComponent={() => {
          return (
            <Content style={{ marginTop: 30 }}>
              <Animatable.View
                animation="pulse"
                easing="ease-out"
                iterationCount={3}
                direction="alternate"
              >
                <Image
                  source={background2}
                  style={{ width: "100%", height: 100, borderRadius: 10 }}
                />
              </Animatable.View>

              <Grid style={{ padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: "white" }}>Be Strong</Text>
              </Grid>
            </Content>
          );
        }}
        onEndReachedThreshold={0}
        onEndReached={async () => {
          console.log("바닥 가까이 감: 리프레시");
        }}
        renderItem={(data) => {
          // console.log(data);
          return <CardComponent navigation={navigation} content={data.item} />;
        }}
        numColumns={1}
        keyExtractor={(item) => item.date.toString()}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00546c",
  },
  banner: {
    backgroundColor: "#F6F6F6",
    height: 70,
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
  },
});
