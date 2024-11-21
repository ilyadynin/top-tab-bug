  const MaterialTopTabNavigator = () => {
    const Tab = createMaterialTopTabNavigator();
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();

    const state = useSelector((state: any) => state)


    useNotificationNavigation();

    return (
      <>
        <View style={{ flex: 1, backgroundColor: "#000" }}>
          <Tab.Navigator
            tabBarPosition={"bottom"}
            initialRouteName={"home"}
            screenOptions={{
              tabBarAndroidRipple: {
                color: "transparent",
                borderless: false,
                radius: 0,
              },
              tabBarPressColor: "transparent",
              tabBarStyle: {
                backgroundColor: "#000",
                marginBottom: insets.bottom,
                elevation: 0,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0,
                shadowRadius: 0,
              },
              tabBarIndicatorStyle: {
                backgroundColor: "transparent",
                width: 0,
                height: 0,
                elevation: 0,
              },
              tabBarLabelStyle: {
                display: "none",
              },
            }}
          >
            <Tab.Screen
              name="Tab1"
              component={Tab1}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome5 name="home" size={21} color={"#fff"} />
                ),
              }}
            />
            <Tab.Screen
              name="Tab2"
              component={Tab2}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="other-icon" size={20} color={"#fff"} />
                ),
              }}
            />
            <Tab.Screen
              name="Tab3"
              component={Tab3}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="other-icon" size={24} color={"#fff"} />
                ),
              }}
            />
            <Tab.Screen
              name="Tab4"
              component={Tab4}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="other-icon" size={24} color={"#fff"} />
                ),
              }}
            />
            <Tab.Screen
              name="Tab5"
              component={Tab5}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <View style={styles.profileIconContainer}>
                    <ExpoImage
                      source={{
                        uri: "uri"
                      }}
                      style={styles.otherIcon}
                      contentFit="cover"
                    />
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        </View>
      </>
    );
  };
