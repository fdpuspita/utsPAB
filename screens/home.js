import { Header } from "../components";
import { ImageBackground } from 'react-native';
import { Box, Image, Button, Text, HStack, Heading, ScrollView, VStack, Icon } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

const Home = ({ navigation }) => {
    const Cucikering = () => {
        navigation.navigate("Cucikering");
    };
    const Voucher = () => {
        navigation.navigate("Voucher");
    };
    return (
        <ImageBackground
            source={require('../assets/bgrating.png')} 
            style={{ flex: 1 }}>
            <Header title={"HOME"} />
            <ScrollView>
                <Box paddingLeft={8} flex={1}>
                    <HStack marginBottom={2} justifyContent={"space-between"}>
                        <VStack>
                            <Text fontSize={15}>HALO,</Text>
                            <Heading fontSize={20}>CLAUDIA.</Heading>
                        </VStack>
                        <Image
                            source={require("../assets/logo.png")}
                            w={"100px"}
                            marginTop={"-15px"}
                            h={"100px"}
                            alt="Washwell Logo"
                            mr={"8"}
                        />
                    </HStack>
                    <Box borderRadius={14} shadow={2} w={350} h={250} backgroundColor={"white"}>
                        <VStack >
                            <HStack p={5} justifyContent={"space-between"}>
                                <Box shadow={4} borderRadius={14} w={130} h={24} backgroundColor={"#EBDF64"}>
                                    <HStack px={5} py={5} justifyContent={"space-between"}>
                                        <Image
                                            source={require("../assets/cucibasah.png")}
                                            w={"50px"}
                                            h={"50px"}
                                            alt="cucibasah"
                                            alignSelf={"center"}

                                        />
                                        <Button ml={3} w={10} background={"#EBDF64"}>
                                            <Icon
                                                as={<Ionicons name={'arrow-redo-circle-outline'} />}
                                                size={8}
                                                color={"black"}
                                            />
                                        </Button>
                                    </HStack>
                                </Box>
                                <Box shadow={4} borderRadius={14} w={130} h={24} backgroundColor={"#EBDF64"}>
                                    <HStack px={4} py={5}>
                                        <Image
                                            source={require("../assets/cucikering.png")}
                                            w={"60px"}
                                            h={"50px"}
                                            alt="Washwell Logo"
                                            alignSelf={"center"}

                                        />
                                        <Button ml={2} w={10} background={"#EBDF64"} onPress={Cucikering}>
                                            <Icon
                                                as={<Ionicons name={'arrow-redo-circle-outline'} />}
                                                size={8}
                                                color={"black"}
                                            />
                                        </Button>
                                    </HStack>
                                </Box>
                            </HStack>
                            <HStack px={5} justifyContent={"space-between"}>
                                <Box shadow={4} borderRadius={14} w={130} h={24} backgroundColor={"#EBDF64"}>
                                    <HStack px={4} py={4}>
                                        <Image
                                            source={require("../assets/cucivip.png")}
                                            w={"60px"}
                                            h={"60px"}
                                            alt="Washwell Logo"
                                            alignSelf={"center"}

                                        />
                                        <Button ml={1} w={10} background={"#EBDF64"}>
                                            <Icon
                                                as={<Ionicons name={'arrow-redo-circle-outline'} />}
                                                size={8}
                                                color={"black"}
                                            />
                                        </Button>
                                    </HStack>
                                </Box>
                                <Box shadow={4} borderRadius={14} w={130} h={24} backgroundColor={"#EBDF64"}>
                                    <HStack px={4} py={5}>
                                        <Image
                                            source={require("../assets/express.png")}
                                            w={"60px"}
                                            h={"50px"}
                                            alt="Washwell Logo"
                                            alignSelf={"center"}
                                        />
                                        <Button ml={1} w={10} background={"#EBDF64"}>
                                            <Icon
                                                as={<Ionicons name={'arrow-redo-circle-outline'} />}
                                                size={8}
                                                color={"black"}
                                            />
                                        </Button>
                                    </HStack>
                                </Box>
                            </HStack>
                        </VStack>
                    </Box>
                    <Box>
                        <HStack pt={10} justifyContent={"space-between"}>
                        <Heading mt={1}>STATUS PESANAN</Heading>
                        <Button onPress={Voucher} bg={"#EBDF64"} borderRadius={14} marginRight={10} h={10} w={24}>
                            <Text bold>Voucher</Text>
                        </Button>
                        </HStack>
                        <VStack>
                            <Box my={3} borderRadius={14} shadow={5} w={350} h={20} backgroundColor={"white"}>
                                <HStack py={4} px={4}>
                                    <Image
                                        source={require("../assets/cucibasah.png")}
                                        w={"40px"}
                                        h={"45px"}
                                        alt="Washwell Logo"
                                        alignSelf={"center"}
                                    />
                                    <VStack px={6}>
                                        <Text bold fontSize={"lg"}>Pesanan No.0045</Text>
                                        <Text color={"green.300"} bold fontSize={"sm"}>Sudah Selesai</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                            <Box my={3} borderRadius={14} shadow={2} w={350} h={20} backgroundColor={"white"}>
                                <HStack py={4} px={4}>
                                    <Image
                                        source={require("../assets/cucibasah.png")}
                                        w={"40px"}
                                        h={"45px"}
                                        alt="Washwell Logo"
                                        alignSelf={"center"}
                                    />
                                    <VStack px={6}>
                                        <Text bold fontSize={"lg"}>Pesanan No.0045</Text>
                                        <Text color={"red.300"} bold fontSize={"sm"}>Pesanan Dicuci</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                            <Box my={3} borderRadius={14} shadow={2} w={350} h={20} backgroundColor={"white"}>
                                <HStack py={4} px={4}>
                                    <Image
                                        source={require("../assets/cucibasah.png")}
                                        w={"40px"}
                                        h={"45px"}
                                        alt="Washwell Logo"
                                        alignSelf={"center"}
                                    />
                                    <VStack px={6}>
                                        <Text bold fontSize={"lg"}>Pesanan No.0045</Text>
                                        <Text color={"red.300"} bold fontSize={"sm"}>Pesanan dibuat</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                        </VStack>
                    </Box>
                </Box>
            </ScrollView>
        </ImageBackground>
    );
};

export default Home;