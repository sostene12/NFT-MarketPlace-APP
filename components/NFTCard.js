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
      }}
    >
      <View style={{ width: "100%", height: 280 }}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "80%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
        <SubInfo />
        <View style={{ width: "100%", padding: SIZES.base }}>
          <NFTTitle />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
