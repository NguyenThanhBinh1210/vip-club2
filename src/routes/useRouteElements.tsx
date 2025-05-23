import { useRoutes } from 'react-router-dom'
import NotFound from '~/pages/NotFound'
import HomeLayout from '~/layouts/HomeLayout'
import Home from '~/pages/Home'
import ThePaizaCollection from '~/pages/Stay/ThePaizaCollection'
import Packages from '~/pages/Stay/Packages'
import SkyparkObservationDeck from '~/pages/Stay/SkyparkObservationDeck'
import InfinityPool from '~/pages/Stay/InfinityPool'
import Shopping from '~/pages/Shop/Shopping'
import StoreDirectory from '~/pages/Shop/StoreDirectory'
import Restaurants from '~/pages/Dine/Restaurants'
import RooftopDining from '~/pages/Dine/RooftopDining'
import WaterfrontDining from '~/pages/Dine/WaterfrontDining'
import FineDining from '~/pages/Dine/FineDining'
import More from '~/pages/More'
import WhatOnAtMbs from '~/pages/WhatOnAtMbs'
import Booking from '~/pages/Booking'
import About from '~/pages/About'
import ContactNow from '~/pages/ContactNow'
import Lifestyle from '~/pages/Rewards/Lifestyle'
import MembersPrivileges from '~/pages/Rewards/MembersPrivileges'
import Signup from '~/pages/Signup'
import SignUpOTPVerification from '~/pages/SignUpOTPVerification'
import SignupSuccessful from '~/pages/SignupSuccessful'
import Login from '~/pages/Login'
import LoginLayout from '~/layouts/LoginLayout'
import VIPMembershipOffers from '~/pages/VIPMembershipOffers'
import PremiumPerks from '~/pages/PremiumPerks'
import EventTournamentPromotions from '~/pages/EventTournamentPromotions'
import Commission from '~/pages/Service/Commission'
import Tour from '~/pages/Service/Tour'
import Support from '~/pages/Service/Support'
import ServiceLayout from '~/pages/Service/ServiceLayout'
import FreeTransport from '~/pages/Service/FreeTransport'
import PokerClub from '~/pages/PokerClub'
import CasinoVip from '~/pages/CasinoVip'

const useRouteElements = () => {
  const routeElements = useRoutes([

    {
      path: '/',
      index: true,
      element: (
        <HomeLayout>
          <Home />
        </HomeLayout>
      )
    },
    {
      path: '/about-us',
      element: (
        <HomeLayout>
          <About />
        </HomeLayout>
      )
    },
    {
      path: '/contact-now',
      element: (
        <HomeLayout>
          <ContactNow />
        </HomeLayout>
      )
    },
    {
      path: '/poker-club',
      element: (
        <HomeLayout>
          <PokerClub />
        </HomeLayout>
      )
    },
    {
      path: '/casino-vip',
      element: (
        <HomeLayout>
          <CasinoVip />
        </HomeLayout>
      )
    },
    {
      path: '/signup',
      element: (
        <LoginLayout>
          <Signup />
        </LoginLayout>
      )
    },
    {
      path: '/login',
      element: (
        <LoginLayout>
          <Login />
        </LoginLayout>
      )
    },
    {
      path: '/SignUpOTPVerification',
      element: (
        <LoginLayout>
          <SignUpOTPVerification />
        </LoginLayout>
      )
    },
    {
      path: '/service',
      element: (
        <HomeLayout>
          <ServiceLayout />
        </HomeLayout>
      ),
      children: [
        {
          path: 'free-transport',
          element: <FreeTransport />
        },
        {
          path: 'support',
          element: <Support />
        },
        {
          path: 'tour',
          element: <Tour />
        },
        {
          path: 'commission',
          element: <Commission />
        }
      ]
    },
    {
      path: '/vip-membership-offers',
      element: (
        <HomeLayout>
          <VIPMembershipOffers />
        </HomeLayout>
      )
    },
    {
      path: '/premium-perks',
      element: (
        <HomeLayout>
          <PremiumPerks />
        </HomeLayout>
      )
    },
    {
      path: '/event-tournament-promotions',
      element: (
        <HomeLayout>
          <EventTournamentPromotions />
        </HomeLayout>
      )
    },
    {
      path: '/signup-successful',
      element: (
        <LoginLayout>
          <SignupSuccessful />
        </LoginLayout>
      )
    },
    {
      path: '/lifestyle',
      element: (
        <HomeLayout>
          <Lifestyle />
        </HomeLayout>
      )
    },
    {
      path: '/members-privileges',
      element: (
        <HomeLayout>
          <MembersPrivileges />
        </HomeLayout>
      )
    },
    {
      path: '/hotel/the-paiza-collection',
      element: (
        <HomeLayout>
          <ThePaizaCollection />
        </HomeLayout>
      )
    },
    {
      path: '/hotel/packages',
      element: (
        <HomeLayout>
          <Packages />
        </HomeLayout>
      )
    },
    {
      path: '/attractions/skypark-observation-deck',
      element: (
        <HomeLayout>
          <SkyparkObservationDeck />
        </HomeLayout>
      )
    },
    {
      path: '/attractions/infinity-pool',
      element: (
        <HomeLayout>
          <InfinityPool />
        </HomeLayout>
      )
    },
    {
      path: '/shopping',
      element: (
        <HomeLayout>
          <Shopping />
        </HomeLayout>
      )
    },
    {
      path: '/shopping/store-directory',
      element: (
        <HomeLayout>
          <StoreDirectory />
        </HomeLayout>
      )
    },
    {
      path: '/restaurants',
      element: (
        <HomeLayout>
          <Restaurants />
        </HomeLayout>
      )
    },
    {
      path: '/restaurants/rooftop-dining',
      element: (
        <HomeLayout>
          <RooftopDining />
        </HomeLayout>
      )
    },
    {
      path: '/guides/party-drinks-mbs/waterfront-bars-marina-bay',
      element: (
        <HomeLayout>
          <WaterfrontDining />
        </HomeLayout>
      )
    },
    {
      path: '/restaurants/fine-dining',
      element: (
        <HomeLayout>
          <FineDining />
        </HomeLayout>
      )
    },
    {
      path: '/more',
      element: (
        <HomeLayout>
          <More />
        </HomeLayout>
      )
    },
    {
      path: '/booking',
      element: (
        <HomeLayout>
          <Booking />
        </HomeLayout>
      )
    },
    {
      path: '/guides/exceptional-experiences/whats-on-at-mbs',
      element: (
        <HomeLayout>
          <WhatOnAtMbs />
        </HomeLayout>
      )
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}
export default useRouteElements
