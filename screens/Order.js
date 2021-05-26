import * as React from 'react';
import { StyleSheet } from 'react-native';
import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  SceneRendererProps,
  SafeAreaView,
} from 'react-native-tab-view';
import Starters from './Starters';
import Main from './Main';
import Deals from './Deals';
// import Salads from './screens/Salads';
// import Desserts from './screens/Desserts';
// import Beverages from './screens/Beverages';
import CartButton from '../components/CartButton';

import { View, useWindowDimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../redux/Actions';


 

export default function Order() {
  const layout = useWindowDimensions();
  const dispatch = useDispatch();
  const login = (user) => dispatch({ type: Actions.LOGIN, payload: user });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'starters', title: 'Starters' },
    { key: 'main', title: 'Main' },
    // { key: 'desserts', title: 'Desserts' },
    // { key: 'beverages', title: 'Beverages' },
    { key: 'deals', title: 'Deals' },
  ]);

const renderScene = ({ route, jumpTo }) => {
  switch (route.key) {
    case 'starters':
      return <Starters jumpTo={jumpTo} />;
    case 'main':
      return <Main jumpTo={jumpTo} />;
    // case 'desserts':
    //   return <Main jumpTo={jumpTo} />;
    // case 'beverages':
    //   return <Main jumpTo={jumpTo} />;
    case 'deals':
      return <Deals jumpTo={jumpTo} />;
    // case 'bev':
    //   return <Beverages jumpTo={jumpTo} />;
  }
};
  const renderTabBar = props => (
  <TabBar
    {...props}
    
    indicatorStyle={{ backgroundColor: 'white' }}
    style={{paddingTop:12, backgroundColor: 'red' }}
  />
);
 
  return (
    <TabView
     renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    //<Cart> </Cart>
  );
}