import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, Text } from 'react-native';
import Colors from '../../constants/colors/Colors';
import Fonts from '../../constants/fonts/TabFont';
import Images from '../../constants/images/Image';
import Strings from '../../i18n/en';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import { TabViewStyle } from './style';
import GoalsScreenStack from '../../screens/GoalScreen/GoalScreen';
import HomeScreenV2 from '../../screens/HomeScreen/HomeScreenV2';
import { useSelector } from 'react-redux';

const tab = createBottomTabNavigator();

const TabNavigation = () => {
  const { isProdEnvironment } = useSelector((store) => store.localFeatureFlag);

  return (
    <NavigationContainer independent>
      <tab.Navigator
        initialRouteName={Strings.Tab_Home}
        screenOptions={() => ({
          headerShown: false,
          tabBarStyle: TabViewStyle.tab_bar,
        })}
      >
        <tab.Screen
          name={Strings.Tab_Home}
          component={HomeScreenV2}
          options={{
            headerShown: false,
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    fontSize: Fonts.Tab_Text_Font,
                    color: focused
                      ? Colors.Tab_Active_Color
                      : Colors.Tab_Inactive_Color,
                  }}
                >
                  {Strings.Tab_Home}
                </Text>
              );
            },
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={TabViewStyle.tab_icon}
                  source={focused ? Images.homeIcon : Images.homeIconUnF}
                />
              );
            },
          }}
        />

        {!isProdEnvironment && (
          <tab.Screen
            name={Strings.Tab_Goal}
            component={GoalsScreenStack}
            options={{
              headerShown: false,

              tabBarLabel: ({ focused }) => {
                return (
                  <Text
                    style={{
                      fontSize: Fonts.Tab_Text_Font,
                      color: focused
                        ? Colors.Tab_Active_Color
                        : Colors.Tab_Inactive_Color,
                    }}
                  >
                    {Strings.Tab_Goal}
                  </Text>
                );
              },
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    style={TabViewStyle.tab_icon}
                    source={focused ? Images.goalIcon : Images.goalIconUnF}
                  />
                );
              },
            }}
          />
        )}

        <tab.Screen
          name={Strings.Tab_Profile}
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={{
                    fontSize: Fonts.Tab_Text_Font,
                    color: focused
                      ? Colors.Tab_Active_Color
                      : Colors.Tab_Inactive_Color,
                  }}
                >
                  {Strings.Tab_Profile}
                </Text>
              );
            },
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={TabViewStyle.tab_icon}
                  source={focused ? Images.profileIcon : Images.profileIconUnF}
                />
              );
            },
          }}
        />
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
