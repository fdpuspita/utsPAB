import { Header } from "../components";
import { ImageBackground } from 'react-native';
import { Box, Button, Heading, ScrollView } from "native-base";

const Riwayat = ({navigation}) => {
  const DetailPesanan = () => {
    navigation.navigate("DetailPesanan");
};
    return (
      <ImageBackground
      source={require('../assets/bgrating.png')} // Ganti dengan path gambar Anda
      style={{ flex: 1 }}>
          <Header title={"RIWAYAT"} />
          <Box p={4} flex={1}>
            <Box flex={2} alignSelf="center" justifyContent="center">
            <Heading>HALAMAN RIWAYAT</Heading>
            </Box>
          </Box>
        </ImageBackground>
    );
};

export default Riwayat;