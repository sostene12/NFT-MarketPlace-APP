import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS, assets } from "../constants";
import {
  FocusedStatusBar,
  RectButton,
  CircleButton,
  SubInfo,
  DetailsDesc,
  DetailsBid,
} from "../components";
import React from "react";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 375 }}>
    <Image source={data.image} />
  </View>
);

const Details = ({ route, navigation }) => {
  const retrievedData = route.params;
  const data = retrievedData.item;
  console.log(route);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => {
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
          </React.Fragment>;
        }}
      />
    </SafeAreaView>
  );
};

export default Details;
