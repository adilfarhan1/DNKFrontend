import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Layout } from './component/layout/Layout'
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
// import CampainPage from './component/campainPage/CampainPage';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>DNK Real Estate | Offplan Projects - Apartments, Villas, Townhouses, Penthouses</title>
        <meta name="keywords" content="New Developments, Off Plan, New Developments in Dubai, Off Plan Projects, Offplan Projects, Off Plan in Dubai, Buy Apartments in Dubai, Buy Villas in Dubai, Buy Townhouses in Dubai, Sale Apartments in Dubai, Sale Villas in Dubai, Sale Townhouses in Dubai, DNK Real Estate, Properties in Dubai, Rent Properties in Dubai, Rent in Dubai, New Off Plan Project, Upcoming Off Plan Properties, New Launch Off-Plan Properties, Dubai Properties Projects, Dubai Real Estate, Real Estate Projects in Dubai, Real Estate Projects in UAE, DNK Real Estate, Real Estate Information, Dubai Developers, Dubai Communities, New Launches, Under Constructions, Ready to Move, Apartment, Villa, Townhouses, Studio, Business Space in Dubai, Office Space in Dubai, Office Space in Business bay Dubai, luxury apartments Dubai, Best Real Estate Company Dubai, Dubai Investment, Dubai Real Estate Market, Downtown Dubai." />
        <meta name="description" content="Looking to buy, sell luxury real estate in Dubai? Explore the best properties, apartments, and villas with DNK Real Estate – your trusted real estate partner. We are here to serve your concerns and with us, you don't have to look anywhere else." />
        <link rel="icon" href="https://www.dnkre.com/logo.webp" />
        <link rel="canonical" href="https://dnkre.com" />
        <meta name="author" content="DNK Real Estate" />

        <link rel="apple-touch-icon" href="https://www.dnkre.com/logo.webp" />

        {/* -- Open Graph Meta Tags for WhatsApp and Social Media Sharing -- */}
        <meta property="og:title" content="DNK Real Estate | Offplan Projects - Apartments, Villas, Townhouses, Penthouses" />
        <meta property="og:description" content="Looking to buy, sell luxury real estate in Dubai? Explore the best properties, apartments, and villas with DNK Real Estate – your trusted real estate partner. We are here to serve your concerns and with us, you don't have to look anywhere else." />
        <meta property="og:image" content="https://www.dnkre.com/logo.webp" />
        <meta property="og:url" content="https://dnkre.com" />
        <meta property="og:type" content="https://dnkre.com" />

        {/* -- Twitter Card for Sharing -- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DNK Real Estate | Offplan Projects - Apartments, Villas, Townhouses, Penthouses" />
        <meta name="twitter:description" content="Looking to buy, sell luxury real estate in Dubai? Explore the best properties, apartments, and villas with DNK Real Estate – your trusted real estate partner. We are here to serve your concerns and with us, you don't have to look anywhere else." />
        <meta name="twitter:image" content="https://www.dnkre.com/logo.webp" />

        {/* Schema Markup for Website */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "#website",
            "headline": "DNK Real Estate | Offplan Projects - Apartments, Villas, Townhouses, Penthouses",
            "keywords": "New Developments, Off Plan, New Developments in Dubai, Off Plan Projects, Offplan Projects, Off Plan in Dubai, Buy Apartments in Dubai, Buy Villas in Dubai, Buy Townhouses in Dubai, Sale Apartments in Dubai, Sale Villas in Dubai, Sale Townhouses in Dubai, DNK Real Estate, Properties in Dubai, Rent Properties in Dubai, Rent in Dubai, New Off Plan Project, Upcoming Off Plan Properties, New Launch Off-Plan Properties, Dubai Properties Projects, Dubai Real Estate, Real Estate Projects in Dubai, Real Estate Projects in UAE, DNK Real Estate, Real Estate Information, Dubai Developers, Dubai Communities, New Launches, Under Constructions, Ready to Move, Apartment, Villa, Townhouses, Studio, Business Space in Dubai, Office Space in Dubai, Office Space in Business bay Dubai, luxury apartments Dubai, Best Real Estate Company Dubai, Dubai Investment, Dubai Real Estate Market, Downtown Dubai.",
            "image": "https://www.dnkre.com/logo.webp",
            "description": "Looking to buy, sell luxury real estate in Dubai? Explore the best properties, apartments, and villas with DNK Real Estate – your trusted real estate partner. We are here to serve your concerns and with us, you don't have to look anywhere else.",
            "url": "https://dnkre.com",
            "telephone": "+971 45 546 904",
            "inLanguage": {
              "@type": "Language",
              "name": ["Arabic", "English", "Hindi"]
            },
            "copyrightHolder": {
              "@type": "Organization",
              "name": "DNK Real Estate",
              "logo": "https://www.dnkre.com/logo.webp",
              "url": "https://dnkre.com/",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971 55 576 9195",
                "contactType": "Sales",
                "email": "info@dnkre.com",
                "areaServed": "United Arab Emirates"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "United Arab Emirates",
                "streetAddress": "Silver Tower - Suite No: 2602",
                "addressLocality": "Merasi Drive, Business Bay, Dubai",
                "addressRegion": "Dubai",
                "postalCode": "500001",
                "streetAddress": "Marasi Dive - Business Bay"
              }
            }
          })}
        </script>

        {/* Schema Markup for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "DNK Real Estate | Offplan Projects - Apartments, Villas, Townhouses, Penthouses",
            "logo": "https://www.dnkre.com/logo.webp",
            "url": "https://dnkre.com/",
            "sameAs": [
              "https://www.instagram.com/dnk_re/",
              "https://www.facebook.com/dnkrealestate1/",
              "https://www.linkedin.com/company/dnkrealestate/",
              "https://www.youtube.com/channel/UCKH7d3Sx2dkfb4pEXXaMpFA"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971 55 576 9195",
              "contactType": "Sales",
              "email": "info@dnkre.com",
              "areaServed": "United Arab Emirates"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "United Arab Emirates",
              "addressLocality": "Merasi Drive, Business Bay, Dubai",
              "addressRegion": "Dubai",
              "postalCode": "500001",
              "streetAddress": "Marasi Dive - Business Bay"
            }
          })}
        </script>

      </Helmet>

      <ScrollViewTop />
      <Routes>
        <Route path='/palm-jebel-ali' element={<JebelAli />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<EventLogin />} />
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
          {/* <Route path='/mykonos' element={<CampainPage />} /> */}
          <Route path='/link' element={<Clintside />} />
          <Route path='/attendance' element={<Attendance />} />
        </Route>
        <Route path='/contact-form' element={<Form />} />
        <Route path='/latilia' element={<LavioletaLayout />} />
        <Route path='/latilia/dubaiproperties' element={<LavioletaLayout />} />
        <Route path='/latilia/paymentplan' element={<LavioletaLayout />} />
        <Route path='/latilia/floorplan' element={<LavioletaLayout />} />
        <Route path='/latilia/amenities' element={<LavioletaLayout />} />
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
    </BrowserRouter>
  );
}

export default App;
