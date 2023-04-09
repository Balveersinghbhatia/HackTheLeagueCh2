import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserDashboard from './User/Dashboard';
import WorkerDashboard from './Worker/Dashboard';
// import { primaryGreen } from "../Config/Color";
import Shop from './User/Shop';
import WorkerProfile from './Worker/Profile';
import UserProfile from './User/Profile';
import Cart from './User/Cart';
import {useState, useEffect} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

const Home = ({route}) => {
  const Tab = createBottomTabNavigator();
  const [worker, setWorker] = useState(false);

  const checkForWorker = async () => {
    // check if the logged in user in normal user or worker here
    // return Dashboard;
    // let Worker = EncryptedStorage.getItem('isWorker');
    // console.log(worker);
    let number = await EncryptedStorage.getItem('number');
    console.log('Nubmer is');
    console.log(number);
    if (number == '7990956141') {
      setWorker(true);
    }
  };

  useEffect(() => {
    console.log('Reached home page');
    checkForWorker();
    setWorker(true);
  }, []);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            position: 'absolute',
            bottom: 15,
            left: 15,
            right: 15,
            borderRadius: 14,
            // borderWidth: 2,
          },
          tabBarShowLabel: false,
        }}>
        {/* Dashboard page */}
        <Tab.Screen
          name="Dashboard"
          component={worker ? WorkerDashboard : UserDashboard}
          options={{
            tabBarIcon: ({color, focused}) => (
              <Icon
                name="home"
                color={focused ? '#4c9e2f' : 'gray'}
                size={26}
              />
            ),
            // tabBarBadge: "99+",
          }}
        />

        {/* Shop page */}
        <Tab.Screen
          name="shopPage"
          component={Shop}
          options={{
            tabBarIcon: ({color, focused}) => (
              <Icon
                name="bars"
                color={focused ? '#4c9e2f' : 'gray'}
                size={26}
              />
            ),
          }}
        />
        {/* Settings page */}
        <Tab.Screen
          name="Settings"
          component={worker ? WorkerProfile : UserProfile}
          options={{
            tabBarIcon: ({color, focused}) => (
              <Icon name="cog" color={focused ? '#4c9e2f' : 'gray'} size={26} />
            ),
          }}
        />
        {/* Cart */}
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({color, focused}) => (
              <Icon
                name="shopping-cart"
                color={focused ? '#4c9e2f' : 'gray'}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Home;
