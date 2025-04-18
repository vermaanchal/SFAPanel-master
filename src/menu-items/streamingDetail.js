// assets
import { AudioOutlined, VideoCameraOutlined } from '@ant-design/icons';
import RadioButtonCheckedSharpIcon from '@mui/icons-material/RadioButtonCheckedSharp';


// icons
const icons = {
    AudioOutlined,
    VideoCameraOutlined,RadioButtonCheckedSharpIcon
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const streamingDetail = {
  id: 'Streaming-details',
  title: 'Streaming Details',
  type: 'group',
  children: [
    {
      id: 'audio-streaming',
      title: 'Audio Streaming',
      type: 'item',
      url: '/audiostreaming',
      // icon: icons.AudioOutlined
      icon: icons.RadioButtonCheckedSharpIcon
    },
    {
      id: 'video-streaming',
      title: 'Video Streaming',
      type: 'item',
      url: '/videostreaming',
      // icon: icons.VideoCameraOutlined,
      icon: icons.RadioButtonCheckedSharpIcon,
    }
  ]
};

export default streamingDetail;
