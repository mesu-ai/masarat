const footerRoutes = [
  {
    title: 'Quick Links', lists: [
      { name: 'Home', path: '/', exact: true },
      { name: 'About', path: '/aboutUs', exact: true },
      { name: 'Service', path: '/service', exact: true },
      { name: 'Solution', path: '/solution', exact: true },
      { name: 'Team', path: '/team', exact: true }

    ]
  },

  {
    title: 'About us', lists: [
      { name: 'Our Vision', path: '/ourVision', exact: true },
      { name: 'Our Team', path: '/ourTeam', exact: true },
      { name: 'Our Works', path: '/ourWorks', exact: true }
    ]
  },

  {
    title: 'Help', lists: [
      { name: 'Privacy Policy', path: '/privacyPolicy', exact: true },
      { name: 'Terms & Conditions', path: '/termsAndConditions', exact: true },
      { name: 'Contact us', path: '/contactUs', exact: true }
    ]
  },
]

export default footerRoutes;