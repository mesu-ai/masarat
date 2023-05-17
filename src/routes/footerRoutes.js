const footerRoutes = [
  {
    title: 'Quick Links', lists: [
      { name: 'Home',name_ar:'بيت', path: '/', exact: true },
      { name: 'About',name_ar:'عن', path: '/aboutUs', exact: true },
      { name: 'Service',name_ar:'خدمة', path: '/productAndService', exact: true },
      { name: 'Solution',name_ar:'حل', path: '/#solution', exact: true },
      { name: 'Team',name_ar:'فريق', path: '/#team', exact: true }

    ]
  },

  {
    title: 'About us', lists: [
      { name: 'Our Vision',name_ar:'رؤيتنا', path: '/aboutUs#vision', exact: true },
      { name: 'Our Team',name_ar:'فريقنا', path: '/aboutUs#team', exact: true },
      { name: 'Our Works',name_ar:'أعمالنا', path: '/aboutUs#work', exact: true }
    ]
  },

  {
    title: 'Help', lists: [
      { name: 'Privacy Policy',name_ar:'سياسة الخصوصية', path: '/privacyPolicy', exact: true },
      { name: 'Terms & Conditions',name_ar:'البنود و الظروف', path: '/termsAndConditions', exact: true },
      { name: 'Contact us',name_ar:'اتصل بنا', path: '/contactUs', exact: true }
    ]
  },
]

export default footerRoutes;