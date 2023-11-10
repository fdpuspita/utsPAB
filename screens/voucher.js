import { Header } from "../components";
import { ImageBackground } from 'react-native';
import { Box, Button, Heading, ScrollView, VStack, Text } from "native-base";

const Voucher = ({ navigation }) => {

    return (
        <>
            <Header title={"VOUCHER"} withBack="true" />
            <ScrollView alignSelf={"center"} py={8}>
                <Box
                    shadow={4}
                    w={350}
                    h={120}
                    borderRadius={14}
                    backgroundColor={"white"}
                >
                    <ImageBackground source={require('../assets/voucher.png')} style={{ width: 320, height: 100, alignSelf: "center", marginTop: 10 }}>
                        <VStack px={5} py={2}>
                            <Heading fontSize={14}>GRATIS ONGKIR</Heading>
                            <Text fontSize={12} bold> s/d 10.000</Text>
                            <Button my={1} borderRadius={14} h={7} bg={"white"} w={16}>
                                <Text bold fontSize={10} mt={-1}>klaim</Text>
                            </Button>
                            <Text fontSize={10} bold> berlaku hanya hari ini</Text>
                        </VStack>
                    </ImageBackground>
                </Box>
                <Box
                my={10}
                    shadow={4}
                    w={350}
                    h={120}
                    borderRadius={14}
                    backgroundColor={"white"}
                >
                    <ImageBackground source={require('../assets/voucher.png')} style={{ width: 320, height: 100, alignSelf: "center", marginTop: 10 }}>
                        <VStack px={5} py={2}>
                            <Heading fontSize={14}>GRATIS ONGKIR</Heading>
                            <Text fontSize={12} bold> s/d 10.000</Text>
                            <Button my={1} borderRadius={14} h={7} bg={"white"} w={16}>
                                <Text bold fontSize={10} mt={-1}>klaim</Text>
                            </Button>
                            <Text fontSize={10} bold> berlaku hanya hari ini</Text>
                        </VStack>
                    </ImageBackground>
                </Box>
            </ScrollView>
        </>
    );
};

export default Voucher;