import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { tailwind } from "tailwind";
import {
  Profile,
  ProfileListItem,
} from "~/components/ProfileListItem/ProfileListItem";
import { RouteParams } from "~/navigation/RootNavigator";

interface HomeProps {}

const profilesList: Profile[] = [
  {
    id: "1",
    photo:
      "https://images.unsplash.com/photo-1519925610903-381054cc2a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    name: "Dancing Star 💃",
    description: "J'aime danser et les crèmes brûlées",
  },
  {
    id: "2",
    photo:
      "https://images.unsplash.com/photo-1590847169880-9856a731bfce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Sunny Joy ☀️",
    description: "Du soleil et du love",
  },
  {
    id: "3",
    photo:
      "https://images.unsplash.com/photo-1483884105135-c06ea81a7a80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Twilight 🧛‍♀️",
    description: "Mauve qui peut",
  },
  {
    id: "4",
    photo:
      "https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Fernandine 🐄",
    description: "L'amour est dans le pré",
  },
  {
    id: "5",
    photo:
      "https://images.unsplash.com/photo-1529154856870-24c2137edce6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Disco Girl 🕺",
    description: "80's my mind",
  },
  {
    id: "6",
    photo:
      "https://images.unsplash.com/photo-1619685037503-45bdc50883e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Wild Time 🍰",
    description: "Grrrrr...",
  },
  {
    id: "7",
    photo:
      "https://images.unsplash.com/photo-1586211082529-b7c6b640abff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Keur d'artichaut 🔪",
    description: "Aime moi stp",
  },
];

export const Home: React.FunctionComponent<HomeProps> = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const renderListItem = ({ item }: { item: Profile }) => {
    const onProfilePress = () => {
      console.log(item.name);
      navigation.navigate("Profile", {
        id: item.id,
        title: item.name,
        image: item.photo,
        description: item.description,
      });
    };
    return (
      <ProfileListItem key={item.id} onPress={onProfilePress} profile={item} />
    );
  };

  const listSeparator = () => (
    <View style={tailwind("h-px bg-gray-200 my-4")} />
  );

  return (
    <SafeAreaView style={tailwind("w-full")}>
      <View>
        <FlatList
          data={profilesList}
          renderItem={renderListItem}
          ItemSeparatorComponent={listSeparator}
        />
      </View>
    </SafeAreaView>
  );
};
