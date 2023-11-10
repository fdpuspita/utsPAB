import React, { useState } from "react";
import { Header } from "../components";
import { Box, Heading, VStack, FlatList, Image, Text, HStack, Button } from "native-base";
import datacucikering from "../datacucikering";
import mesincuciimage from "../assets/mesincuci.png";

const Cucikering = ({ navigation }) => {  //flatlist
  const Item = ({ item }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    return (
      <VStack py={2} alignSelf={"center"}>
        <Box borderRadius={24} shadow={4} w={350} h={120} bg={"white"}>
          <HStack px={7} py={7}>
            <Image
              source={mesincuciimage}
              alt="Image Data"
              my={1}
              w="60px"
              h="60px"
            />
            <VStack>
              <Text px={3} bold fontSize={15}>{item.title}</Text>
              <Text color={"green.400"} px={3} bold fontSize={13}>{item.price}</Text>
              <HStack>
                <Button
                  backgroundColor={"transparent"}
                  p={1}
                  h={8}
                  w={7}
                  onPress={handleDecrement}>
                  <Text fontSize={12} paddingBottom={2} color={"black"}>-</Text>
                </Button>
                <Text
                  mt={1}
                  fontSize={12}
                  borderBottomLeftRadius={2}
                >
                  {quantity}
                </Text>
                <Button backgroundColor={"transparent"}
                  p={1}
                  h={8}
                  w={7}
                  onPress={handleIncrement}>
                  <Text fontSize={12} paddingBottom={2} color={"black"}>+</Text>
                </Button>
              </HStack>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    );
  };

  return (
    <>
      <Header title={"Cuci Kering"} withBack="True" />
      <FlatList
        data={datacucikering}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <VStack py={2}> 
      <HStack paddingBottom={2} px={10} justifyContent={"space-between"}>
        <Text bold>0 Items</Text>
        <Text bold color={"green.400"}>Rp 0</Text>
      </HStack>
      <Button bg={"#EBDF64"} alignSelf={"center"} h={12} w={350}>
        <Text bold>
         PESAN SEKARANG
         </Text>
         </Button>
      </VStack>
    </>
  );
};

export default Cucikering;
