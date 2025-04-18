// assets
import { DashboardOutlined } from '@ant-design/icons';
import FilterFramesOutlinedIcon from '@mui/icons-material/FilterFramesOutlined';
import RadioButtonCheckedSharpIcon from '@mui/icons-material/RadioButtonCheckedSharp';

// icons
const icons = {
  DashboardOutlined, FilterFramesOutlinedIcon, RadioButtonCheckedSharpIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const updateFrame = {
  id: 'update-coins',
  title: 'Customizations',
  type: 'group',
  children: [
    {
      id: 'update-frame',
      title: 'Add/Remove Frame',
      type: 'item',
      url: '/updateFrame',
      // icon: icons.FilterFramesOutlinedIcon,
      icon: icons.RadioButtonCheckedSharpIcon,
      // breadcrumbs: false
    }
  ]
};

export default updateFrame;
