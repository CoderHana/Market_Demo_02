import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import HomeScreen from "../Containers/HomeScreen";
import styles from "./Styles/NavigationStyles";
import ListScreen from "../Containers/ListScreen";
import SearchScreen from "../Containers/SearchScreen";
import CategoryScreen from "../Containers/CategoryScreen";
import BasketScreen from "../Containers/BasketScreen";

const MainTabNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen, tabBarLabel: "خانه"},
  List: {screen: ListScreen, tabBarLabel: "لیست خرید"},
  Search: {screen: SearchScreen, tabBarLabel: "جستجو"},
  Category: {screen: CategoryScreen, tabBarLabel: "دسته بندی"},
  Basket: {screen: BasketScreen, tabBarLabel: "سبد خرید"},
}, {
  // Default config for all screens
})

export default MainTabNavigator
