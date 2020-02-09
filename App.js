import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';
import ScoreScreen from './src/screens/ScoreScreen';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen, navigationOptions: { title: 'Hafıza oyunu' } },
    Game: { screen: GameScreen, navigationOptions: { title: 'Hafıza oyunu' } },
    Score: { screen: ScoreScreen, navigationOptions: { title: 'Skorlar' } }
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);