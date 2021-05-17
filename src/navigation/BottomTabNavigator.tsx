import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { StackNavigationOptions } from '@react-navigation/stack'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faFilm, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

import FavoriteScreen from '../screens/Favorite/FavoriteScreen'
import SeriesScreen from '../screens/Series/SeriesScreen'
import SerieListScreen from '../screens/Series/SerieListScreen'
import SerieDetailedScreen from '../screens/Series/SerieDetailedScreen'
import HomeScreen from '../screens/Home/HomeScreen'
import { BottomTabParamList, FavoriteParamList, SeriesParamList, HomeParamList } from '../../types'
import Logo from '../components/Logo/Logo'
import BackArrow from '../components/BackArrow/BackArrow'
import Colors from '../constants/Colors'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

const options: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.black,
    height: 70,
  },
  headerBackTitleStyle: {
    display: 'none',
  },
  headerBackImage: () => <BackArrow />,
  headerTitle: () => <Logo />,
  headerTitleContainerStyle: {
    left: 0,
  },
}

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.red,
        inactiveTintColor: Colors.lightGray,
      }}
      initialRouteName="Home"
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon icon={faHome} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoriteNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon icon={faHeart} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Series"
        component={SeriesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon icon={faFilm} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon(props: { icon: IconDefinition; color: string }) {
  return <FontAwesomeIcon size={25} style={{ marginBottom: -3 }} {...props} />
}

const HomeStack = createStackNavigator<HomeParamList>()

function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={options}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  )
}

const FavoriteStack = createStackNavigator<FavoriteParamList>()

function FavoriteNavigator() {
  return (
    <FavoriteStack.Navigator screenOptions={options}>
      <FavoriteStack.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <FavoriteStack.Screen name="SerieDetailedScreen" component={SerieDetailedScreen} />
    </FavoriteStack.Navigator>
  )
}

const SeriesStack = createStackNavigator<SeriesParamList>()

function SeriesNavigator() {
  return (
    <SeriesStack.Navigator screenOptions={options}>
      <SeriesStack.Screen name="SeriesScreen" component={SeriesScreen} />
      <SeriesStack.Screen name="SerieListScreen" component={SerieListScreen} />
      <SeriesStack.Screen name="SerieDetailedScreen" component={SerieDetailedScreen} />
    </SeriesStack.Navigator>
  )
}
