// assets
import { UserSwitchOutlined } from '@ant-design/icons';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import RadioButtonCheckedSharpIcon from '@mui/icons-material/RadioButtonCheckedSharp';
// icons
const icons = {
  UserSwitchOutlined, SupervisorAccountOutlinedIcon,RadioButtonCheckedSharpIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const appUserDetail = {
  id: 'app-user',
  title: 'User Management',
  type: 'group',
  children: [
    {
      id: 'app-user-details',
      title: 'App User Details',
      type: 'item',
      url: '/appuserdetails',
      // icon: icons.UserSwitchOutlined,
      icon: icons.RadioButtonCheckedSharpIcon,
      //   breadcrumbs: false
    },
    
  ],
  
};

export default appUserDetail;
