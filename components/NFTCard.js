import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from "./Button";

import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

const NFTCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
        paddingBottom: SIZES.maximum,
      }}
    >
      <View style={{ width: "100%", height: 300 }}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "70%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
        <SubInfo />
        <View style={{ width: "100%", padding: SIZES.base }}>
          <NFTTitle
            title={item.name}
            subTitle={item.creator}
            titleSize={SIZES.large}
            subTitleSize={SIZES.small}
          />
          <View
            style={{
              marginTop: SIZES.base,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <EthPrice price={item.price} />
            <RectButton
              minWidth={110}
              fontSize={SIZES.small}
              handlePress={() => navigation.navigate("Details", { item })}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
