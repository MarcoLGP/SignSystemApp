import {SafeAreaView, StyleSheet} from "react-native";
import AppBar from "./src/Home/AppBar";
import UsersList from "./src/Home/UsersList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <UsersList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    flexDirection: "column"
  },
});

export default App;