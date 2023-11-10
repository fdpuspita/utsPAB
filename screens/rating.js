import React, { useState } from 'react';
import { Header } from "../components";
import { ImageBackground } from 'react-native';
import { Box, Pressable, ScrollView, TextArea, Button, Image, Heading, Slider, Text, View, Icon, Center, VStack, HStack } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

const Rating = ({navigation}) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const Pesanan = () => {
    navigation.navigate("Pesanan");
};

  return (
    <ImageBackground
      source={require('../assets/bgrating.png')} // Ganti dengan path gambar Anda
      style={{ flex: 1 }}>
            <ScrollView>
      <Box flex={1} py={4} alignSelf={"center"}>
        <Heading pt={5} alignSelf={"center"}>CLAUDIA</Heading>
        <Image
          source={require("../assets/logo.png")}
          mt={2}
          w="220"
          h="240"
          alt="Washwell Logo"
          mr={"3"}
        />
      </Box>
      <Box alignSelf={"center"} flex={1}>
        <Heading alignSelf={"center"}>CUCI VIP</Heading>
        <Text bold alignSelf={"center"}> Paket Setrika + Cuci Lengkap</Text>
        <VStack pt={10}>
          <Heading>Rate</Heading>
          <Pressable onPress={() => handleRatingChange(1)}>
            <HStack pt={3}>
              <Icon
                as={<Ionicons name={rating >= 1 ? 'star' : 'star-outline'} />}
                size={8}
                color={rating >= 1 ? 'yellow.400' : 'gray.400'}
              />
              <Icon
                as={<Ionicons name={rating >= 2 ? 'star' : 'star-outline'} />}
                size={8}
                color={rating >= 2 ? 'yellow.400' : 'gray.400'}
              />
              <Icon
                as={<Ionicons name={rating >= 3 ? 'star' : 'star-outline'} />}
                size={8}
                color={rating >= 3 ? 'yellow.400' : 'gray.400'}
              />
              <Icon
                as={<Ionicons name={rating >= 4 ? 'star' : 'star-outline'} />}
                size={8}
                color={rating >= 4 ? 'yellow.400' : 'gray.400'}
              />
              <Icon
                as={<Ionicons name={rating >= 5 ? 'star' : 'star-outline'} />}
                size={8}
                color={rating >= 5 ? 'yellow.400' : 'gray.400'}
              />
            </HStack>
          </Pressable>
        </VStack>
        <VStack pt={10}>
          <Heading>Komentar</Heading>
          <TextArea h={20} placeholder="Masukan Komentar" w={320} maxW="320" />
          <Button bg={"yellow.200"} mt={20} onPress={Pesanan}>
            <Text bold> Kirim</Text>
            </Button>
        </VStack>
      </Box>
      <Box flex={"1"}></Box>
      </ScrollView>
    </ImageBackground>
  );
};

export default Rating;