import { Header } from "../components";
import { ImageBackground } from 'react-native';
import { Box, Button, Heading, ScrollView } from "native-base";

const Chat = ({navigation}) => {
  const DetailPesanan = () => {
    navigation.navigate("DetailPesanan");
};
    return (
      <ImageBackground
      source={require('../assets/bgrating.png')} // Ganti dengan path gambar Anda
      style={{ flex: 1 }}>
          <Header title={"CHAT"} />
          <Box p={4} flex={1}>
            <Box flex={2} alignSelf="center" justifyContent="center">
            <Heading>HALAMAN CHAT</Heading>
            </Box>
          </Box>
        </ImageBackground>
    );
};

export default Chat;