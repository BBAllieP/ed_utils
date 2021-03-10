import HomeIcon from '@material-ui/icons/Home';
import SecurityIcon from '@material-ui/icons/Security';
import Shields from './Shields';
import Home from './Home';
import RoutePlanner from './RoutePlanner';

const MenuItems = [
    {text: 'Home', icon: <HomeIcon />, route: '/', page: <Home />, isExact: true }, 
    {text: 'Shield Calculator', icon: <SecurityIcon />, route: '/shields', page: <Shields />},
    {text: 'RoutePlanner', icon: <SecurityIcon />, route: '/route-planner', page: <RoutePlanner />},
];

export default MenuItems;