import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, View } from "react-native";

import { tailwind } from "tailwind";
import { Button } from "~/components/Button";
import { Card } from "~/components/Card";
import { RouteParams } from "~/navigation/RootNavigator";

interface ProfileProps {}

export const Profile: React.FunctionComponent<ProfileProps> = ({}) => {
  const route = useRoute<RouteProp<RouteParams>>();

  const buttonPressed = () => {
    console.log("button pressed");
  };
  return (
    <View style={tailwind("flex items-center justify-center h-full")}>
      <Card>
        <Image
          source={{
            uri: route.params?.image,
          }}
          resizeMode="cover"
          style={[
            {
              width: 240,
              height: 160,
            },
            tailwind("rounded-t"),
          ]}
        />
        <View style={tailwind("p-5")}>
          <Text style={tailwind("font-bold text-xl")}>
            {route.params?.title}
          </Text>
          <Text style={tailwind("text-xs text-gray-500 mb-4")}>
            {route.params?.description}
          </Text>
          <Button onPress={buttonPressed}>Envoyer un kiss 😘</Button>
          <Button onPress={buttonPressed} type="secondary">
            Ne pas donner suite
          </Button>
        </View>
      </Card>
    </View>
  );
};
