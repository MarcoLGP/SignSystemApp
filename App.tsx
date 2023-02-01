import {StyleSheet, View} from "react-native";
import AppBar from "./src/Home/AppBar";
import UsersList from "./src/Home/UsersList";
const App = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <UsersList />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
});
