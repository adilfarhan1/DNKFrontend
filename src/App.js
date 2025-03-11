import './App.scss';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Layout } from './component/layout/Layout'
import { HelmetProvider } from 'react-helmet-async';
import Home from './component/pages/home/Home';
import About from './component/pages/about/About';
import Team from './component/pages/team/Team';
import ProjectDetail from './component/pages/projectDetail/ProjectDetail';
import Admin from './component/pages/login/Admin';
import DashboardLayout from './component/pages/dashboard/DashboardLayout';
import AddTeam from './component/pages/dashboard/component/AddTeam';
import AddProject from './component/pages/dashboard/component/AddProject';
import ViewList from './component/pages/dashboard/component/ViewList';
import DashboardHome from './component/pages/dashboard/component/DashboardHome';
import Contact from './component/pages/contact/Contact';
import TeamViewList from './component/pages/dashboard/component/TeamViewList';
import TeamDetail from './component/pages/team/TeamDetail';
import BuyProject from './component/pages/projectDetail/BuyProject';
import OurServices from './component/pages/ourService/OurServices';
import CareerPage from './component/pages/career/CareerPage';
import ScrollViewTop from './hooks/ScrollViewTop';
import OffPlanProject from './component/pages/projectDetail/OffPlanProject';
import AddAdImage from './component/pages/dashboard/component/AddAdImage';
import SellProject from './component/pages/projectDetail/SellProject';
import ReviewAdd from './component/pages/dashboard/component/ReviewAdd';
import AddPartner from './component/pages/dashboard/component/AddPartner';
import AddHomeBanner from './component/pages/dashboard/component/AddHomeBanner';
import AddSpclDay from './component/pages/dashboard/component/AddSpclDay';
import AddLogo from './component/pages/dashboard/component/AddLogo';
import Form from './component/pages/form/Form';
import RodeshowLayout from './component/roadshow/RodeshowLayout';
import RegisterRoadshow from './component/roadshow/components/RegisterRoadshow';
import CreateRoadshow from './component/roadshow/components/CreateRoadshow';
import RoadshowList from './component/roadshow/components/RoadshowList';
import Clintside from './component/roadshow/Clintside';
import EventLogin from './component/pages/login/EventLogin';
import ClientRegisterList from './component/roadshow/components/ClientRegisterList';
import Attendance from './component/roadshow/Attendance';
import JebelAli from './component/other/jebelAli/JebelAli';
import LavioletaLayout from './component/subProject/lavioleta/LavioletaLayout';
import PrivacyPolicy from './component/pages/privacyPolicy/PrivacyPolicy';
import NotFound from "./component/pages/page404/NotFound";
import ApartmentsDubai from './component/other/apartments/ApartmentsDubai';
import NewsDetail from './component/pages/news/NewsDetail';
import AddNews from './component/pages/dashboard/component/AddNews';
import News from './component/pages/news/News';

function App() {

  const Auth = () => {
    const login = localStorage.getItem('login')
    return login ? <Outlet /> : <Navigate to="/admin" />
  }
  const EventAuth = () => {
    const roadshowLogin = localStorage.getItem('login')
    return roadshowLogin ? <Outlet /> : <Navigate to="/login" />
  }
  
  return (
    <BrowserRouter>
      <ScrollViewTop />
        <HelmetProvider>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/projects/:slug' element={<ProjectDetail />} />
              <Route path='/team-detail/:id' element={<TeamDetail />} />
              <Route path='/buy-project' element={<BuyProject />} />
              <Route path='/off-plan-project' element={<OffPlanProject />} />
              <Route path='/sell-project' element={<SellProject />} />
              <Route path='/services' element={<OurServices />} />
              <Route path='/careers' element={<CareerPage />} />
              <Route path='/link' element={<Clintside />} />
              <Route path='/attendance' element={<Attendance />} />
              <Route path='/privacy-policy' element={<PrivacyPolicy />} />
              <Route path='/news/' element={<News />} />
              <Route path='/news/:newsurl' element={<NewsDetail />} />
            </Route>
            <Route path='/dubai-apartments' element={<ApartmentsDubai />} />
            <Route path='/palm-jebel-ali' element={<JebelAli />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/login' element={<EventLogin />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/contact-form' element={<Form />} />
            <Route path='/bahriatown-dubai' element={<LavioletaLayout />} />
            <Route path='/bahriatown-dubai/paymentplan' element={<LavioletaLayout />} />
            <Route path='/bahriatown-dubai/floorplan' element={<LavioletaLayout />} />
            <Route path='/bahriatown-dubai/amenities' element={<LavioletaLayout />} />
            <Route element={<Auth />}>
              <Route path='/dashboard' element={<DashboardLayout />}>
                <Route index element={<DashboardHome />} />
                <Route path='/dashboard/viewList' element={<ViewList />} />
                <Route path='/dashboard/addTeam' element={<AddTeam />} />
                <Route path='/dashboard/addproject' element={<AddProject />} />
                <Route path='/dashboard/team' element={<TeamViewList />} />
                <Route path='/dashboard/ad' element={<AddAdImage />} />
                <Route path='/dashboard/review' element={<ReviewAdd />} />
                <Route path='/dashboard/partner' element={<AddPartner />} />
                <Route path='/dashboard/home-banner' element={<AddHomeBanner />} />
                <Route path='/dashboard/special-day' element={<AddSpclDay />} />
                <Route path='/dashboard/special-day-logo' element={<AddLogo />} />
                <Route path='/dashboard/addNews' element={<AddNews />} />
              </Route>
            </Route>
            <Route element={<EventAuth />}>
              <Route path='/roadshow' element={<RodeshowLayout />}>
                <Route index element={<RegisterRoadshow />} />
                <Route path='/roadshow/create' element={<CreateRoadshow />} />
                <Route path='/roadshow/register' element={<RegisterRoadshow />} />
                <Route path='/roadshow/registerlist' element={<RoadshowList />} />
                <Route path='/roadshow/clientregisterlist' element={<ClientRegisterList />} />
              </Route>
            </Route>
          </Routes>
        </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
