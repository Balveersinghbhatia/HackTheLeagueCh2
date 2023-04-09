import { Dimensions, StyleSheet, Platform } from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const style = StyleSheet.create({
  container: {
    paddingTop: 30,
    // backgroundColor: "red",
  },
  title: {
    marginBottom: 3,
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  description: {
    color: "black",
    fontSize: 17,
  },
  item: {
    width: "100%",
    height: screenWidth * 0.75, //height will be 20 units less than screen width.
    // backgroundColor: "#4c9e2f",
    backgroundColor: "#0DB462",
    borderRadius: 20,
  },
  imageContainer: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "lightblue",
    // marginBottom: Platform.select({ ios: 0, android: 1 }), //handle rendering bug.
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  dotContainer: {
    backgroundColor: "rgb(230,0,0)",
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "black",
  },
  inactiveDotStyle: {
    backgroundColor: "rgb(255,230,230)",
  },
});
export default style;
