import React from 'react';
import { View, Text, TextInput, Image, Button, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Selamat datang di Aplikasi Penjualan baju online</Text>
      <TextInput placeholder="Cari produk..." />
      <ScrollView>
        <Image
        source={{uri:'https://th.bing.com/th/id/R.72e5ecaed75c2bebc7074a42777ca054?rik=vyV0hXNJu13ydQ&riu=http%3a%2f%2fartikeloka.com%2fwp-content%2fuploads%2f2020%2f01%2fkopi-arabika.jpg&ehk=uJVi%2bJb3d0DGeJ2qIJJE0Rh7yAnpe%2fAfr4CIULPHslE%3d&risl=&pid=ImgRaw&r=0'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://www.ngopibareng.id/images/imagecache/9fff6ce29a1bfc4d3f1946324bf0b563.jpg'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://2.bp.blogspot.com/-zv5MclNlYXg/VqomH88ENoI/AAAAAAAABQ8/DoprGikXivc/s640/kopi.jpg'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://th.bing.com/th/id/R.2f537d7cfaa6ae7baba3f8784a9ce155?rik=01TC8ag3D4aGZw&riu=http%3a%2f%2fekonomikasyariah.com%2fwp-content%2fuploads%2f2022%2f02%2fkopi-robusta.jpg&ehk=nY%2fMu0NigW1ccsivBGLKX1F4C30zX0pA%2bdkGEm1mo2k%3d&risl=&pid=ImgRaw&r=0'}}style={{width:200,height:200}}/>
      </ScrollView>
      <Button title="Beli" onPress={() => ('Produk telah ditambahkan ke keranjang belanja')} />
    </View>
  );
};

export default App;