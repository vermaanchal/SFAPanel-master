import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import AdminRequest from 'pages/extra-pages/requests/adminRequest';
import AgencyRequest from 'pages/extra-pages/requests/agencyRequest';
import HostRequest from 'pages/extra-pages/requests/hostRequest';
import AdminAgencyHostRequest from 'pages/extra-pages/requests/adminagencyHostRequest';
import AppUserDetails from 'pages/extra-pages/appUserDetails';
import IdBanUnban from 'pages/extra-pages/accountstatus/Idbanunban';
import DeviceIdBlockUnblock from 'pages/extra-pages/accountstatus/deviceIdblockunblock';
import VideoStreaming from 'pages/extra-pages/streamingDetails/videoStreaming';
import AudioStreaming from 'pages/extra-pages/streamingDetails/audioStreaming';
import CreateReseller from 'pages/extra-pages/reseller-Details/createReseller';
import CoinReselling from 'pages/extra-pages/reseller-Details/coinReselling';
import DeductResellerCoin from 'pages/extra-pages/reseller-Details/deductResellerCoin';
import UpdateUserCoin from 'pages/extra-pages/add/deduct_usercoin/UpdateUserCoin';
import VideoUploadRecord from 'pages/extra-pages/video-upload/VideoUploadRecord';
import AddDesignation from 'pages/extra-pages/add-designation/AddDesignation';
import AssignRole from 'pages/extra-pages/assign-role/AssignROle';
import TeenPatti from 'pages/extra-pages/game/teenPatti';
import FruitSlot from 'pages/extra-pages/game/fruitSlot';
import TripleSeven from 'pages/extra-pages/game/777';
import BankWithdraw from 'pages/extra-pages/withdrawRecord/bank';
import WalletWithdraw from 'pages/extra-pages/withdrawRecord/wallet';
import UpdateBeans from 'pages/extra-pages/add-deductBean/AddDeductBeans';
import UpdateUserRide from 'pages/extra-pages/add-remove-ride/AddRemoveRide';
import Login from 'pages/authentication/Login';
import AgencyInsideAdmin from 'pages/extra-pages/requests/AgencyInsideAdmin';
import SFAguess from 'pages/extra-pages/game/SFAguess';
import HostInsideAgency from 'pages/extra-pages/requests/HostinsideAgency';
import UpdateFrames from 'pages/extra-pages/add-remove-frame/addRemoveFrames';
import ReceivingReport from 'pages/extra-pages/reports/ReceivingReport';
import SendingReport from 'pages/extra-pages/reports/sendingReport';
import EndUserStream from 'pages/extra-pages/end-user-stream/EndUserStream';
// import ChangePassword from 'pages/authentication/ChangePassword';
import UserReportnFeedback from 'pages/extra-pages/feedbackreport-detail/userReport&feedback';
import AudioStreamingTodayReport from 'pages/extra-pages/streamingDetails/AudioStreaminTodayReport';
import AudioStreamingMonthlyReport from 'pages/extra-pages/streamingDetails/AudioStreamingMonthlyReport';
import VideoStreamingTodayReport from 'pages/extra-pages/streamingDetails/VideoStreamingTodayReport';
import VideoStreamingMonthlyReport from 'pages/extra-pages/streamingDetails/VideoStreamingMonthlyReport';
import AdminReceivingReport from 'pages/extra-pages/reports/AdminReceivingReport';
import AgencyReceivingReport from 'pages/extra-pages/reports/AgencyReceivingReport';
import SpinGame from 'pages/extra-pages/game/SpinGame';
import WalletFreezeUnfreeze from 'pages/extra-pages/WalletFreezeUnfreeze/WalletFreezeUnfreez';
import MomentUploadList from 'pages/extra-pages/momentUploadList/MomentUploadList';
import SFALudo from 'pages/extra-pages/game/sfaLudo';
import PlayStoreRecord from 'pages/extra-pages/playstorePurchase/PlayStore';
import MonthlyReport from 'pages/extra-pages/reports/MonthlyReport';
import SFAKeno from 'pages/extra-pages/game/SFAKeno';
import AddRemoveTheme from 'pages/extra-pages/add-remove-theme/AddremoveTheme';
import AllReceivingReport from 'pages/extra-pages/reports/AllReceivings';
import MonthlyReceiverReport from 'pages/extra-pages/reports/MonthlyReceiverReport';
import SFAGuessRecord from 'pages/extra-pages/game/SFAGuessRecord';
import SFAGuessRecordTime from 'pages/extra-pages/game/SFAGuessRecordTime';
import AudioStreamingViewMore from 'pages/extra-pages/streamingDetails/AudioStreamingViewMore';
import GetAllResellerSummary from 'pages/extra-pages/reseller-Details/GetAllResellerSummary';
import AgentRequest from 'pages/extra-pages/requests/AgentRequest';
import ApproveAgentRequest from 'pages/extra-pages/requests/ApproveAgentRequest';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Login />
    },
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'appuserdetails',
      element: <AppUserDetails />
    },
    {
      path: 'adminRequest',
      element: <AdminRequest />
    },
    {
      path: 'agencyRequest',
      element: <AgencyRequest />
    },
    {
      path: 'hostRequest',
      element: <HostRequest />
    },
    {
      path: 'AdminAgencyHost',
      element: <AdminAgencyHostRequest />
    },
    {
      path: 'AgentRequest',
      element: <AgentRequest />
    },
    {
      path: 'ApproveAgentRequest',
      element: <ApproveAgentRequest />
    },
    {
      path: 'IDBanUnBan',
      element: <IdBanUnban />
    },
    {
      path: 'DeviceBlock',
      element: <DeviceIdBlockUnblock />
    },
    {
      path: 'audiostreaming',
      element: <AudioStreaming />
    },
    {
      path: 'videostreaming',
      element: <VideoStreaming />
    },
    {
      path: 'Reseller',
      element: <CreateReseller />
    },
    {
      path: 'CoinResell',
      element: <CoinReselling />
    },
    {
      path: 'GetAllResellerSummary',
      element: <GetAllResellerSummary/>
    },
    {
      path: 'DeductResellCoin',
      element: <DeductResellerCoin />
    },
    {
      path: 'UpdateUserCoin',
      element: <UpdateUserCoin />
    },
    {
      path: 'BeanTransferView',
      element: <UpdateBeans />
    },
    {
      path: 'updateFrame',
      element: <UpdateFrames />
    },
    {
      path: 'UserRide',
      element: <UpdateUserRide />
    },
    {
      path: 'VideoUploadRecord',
      element: <VideoUploadRecord />
    },
    {
      path: 'CreateDesignation',
      element: <AddDesignation />
    },
    {
      path: 'AssignRole',
      element: <AssignRole />
    },
    {
      path: 'SFAgame',
      element: <SFAguess />
    },
    {
      path: 'SFAGuessRecordTime',
      element: <SFAGuessRecordTime />
    },
    {
      path: 'sfa-guess-record',
      element: <SFAGuessRecord />
    },
    {
      path: 'TeenPati',
      element: <TeenPatti />
    },
    {
      path: 'Fruitslot',
      element: <FruitSlot />
    },
    {
      path: 'TrippleSeven_Game',
      element: <TripleSeven />
    },
    {
      path: 'TeenPati',
      element: <TeenPatti />
    },
    {
      path: 'SFASpinGame',
      element: <SpinGame />
    },
    {
      path: 'BankWithdraw',
      element: <BankWithdraw />
    },
    {
      path: 'WalletWithdraw',
      element: <WalletWithdraw />
    },
    {
      path: 'UserReport',
      element: <UserReportnFeedback />
    },
    {
      path: 'walletFreezeUnfreeze',
      element: <WalletFreezeUnfreeze />
    },
    {
      path: 'AdminAgencyHost/:adminId',
      element: <AgencyInsideAdmin />
    },
    {
      path: 'AgencyInsideAdmin/:agencyCode',
      element: <HostInsideAgency />
    },
    {
      path: 'HostReceivingReport',
      element: <ReceivingReport />
    },
    {
      path: 'UserSendingReport',
      element: <SendingReport />
    },
    {
      path: 'AdminReport',
      element: <AdminReceivingReport />
    },
    {
      path: 'AgencyReport',
      element: <AgencyReceivingReport />
    },
    {
      path: 'AllReceiving',
      element: <AllReceivingReport />
    },
    {
      path: 'UserLiveDetails',
      element: <EndUserStream />
    },
    // {
    //   path: '/changepassword',
    //   element: <ChangePassword />
    // },
    // {
    //   path: 'useraudiostreaming/:userId',
    //   element: <AudioStreamingTodayReport />
    // },
    {
      path: 'ViewMoreAudioReportResponse/:userId',
      element: <AudioStreamingViewMore />
    },
    {
      path: 'UserTodayAudioStreamingDetails/:userId',
      element: <AudioStreamingTodayReport />
    },
    // {
    //   path: 'audiomonthlyreport/:userId',
    //   element: <AudioStreamingMonthlyReport />
    // },
    {
      path: 'UserMonthlyAudioStreamingDetails/:userId',
      element: <AudioStreamingMonthlyReport />
    },
    {
      path: 'uservideostreaming/:userId',
      element: <VideoStreamingTodayReport />
    },
    {
      path: 'videomonthlyreport/:userId',
      element: <VideoStreamingMonthlyReport />
    },
    {
      path: 'MomentUploadList',
      element: <MomentUploadList />
    },
    {
      path: 'SFAludo',
      element: <SFALudo />
    },
    {
      path: 'SFAkeno',
      element: <SFAKeno />
    },
    {
      path: 'playStorePurchaseRecord',
      element: <PlayStoreRecord />
    },
    {
      path: 'MonthlySenderReport',
      element: <MonthlyReport />
    },
    {
      path: 'MonthlyReceiverReport',
      element: <MonthlyReceiverReport />
    },
    {
      path: 'updateTheme',
      element: <AddRemoveTheme />
    },

  ]
};

export default MainRoutes;
