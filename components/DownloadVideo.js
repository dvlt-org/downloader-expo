// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Button } from "react-native";
// import { Video } from "expo-av"; // expo-av paketidan Video komponentini import qilish

// const DownloadedVideo = ({ route, navigation }) => {
//   const { uri } = route.params; 

//   const [status, setStatus] = useState({});
  
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Downloaded Video</Text>
      
//       {/* Video oynatish */}
//       <Video
//         source={{ uri: uri }} // Video faylning manzili
//         style={styles.video}
//         useNativeControls
//         resizeMode="contain"
//         onPlaybackStatusUpdate={(status) => setStatus(() => status)}
//       />

//       {/* Ekranga qaytish uchun tugma */}
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f0f0f0",
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   video: {
//     width: "100%",
//     height: 300,
//     backgroundColor: "#000",
//   },
// });

// export default DownloadedVideo;
