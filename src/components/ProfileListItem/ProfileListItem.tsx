import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";

import { tailwind } from "tailwind";
import { Card } from "~/components/Card";

export type Profile = {
  id: string;
  photo: string;
  name: string;
  description: string;
};

interface ProfileListItemProps {
  onPress: () => void;
  profile: Profile;
}

export const ProfileListItem: React.FunctionComponent<ProfileListItemProps> = ({
  onPress,
  profile,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={tailwind("p-5 flex flex-row items-center")}>
        <Image
          source={{
            uri: profile.photo,
          }}
          resizeMode="cover"
          style={[
            {
              width: 92,
              height: 92,
            },
            tailwind("rounded"),
          ]}
        />
        <View style={tailwind("ml-4")}>
          <Text style={tailwind("font-bold text-xl")}>{profile.name}</Text>
          <Text style={tailwind("text-xs text-gray-500")}>
            {profile.description}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
