// export const MenuItems = [
//   {
//     title: "Home",
//     url: "/",
//     cName: "nav-links",
//     icon: "fa-solid fa-house-user"
//   },
//   {
//     title: "About Us",
//     url: "/about us",
//     cName: "nav-links",
//     icon: "fa-solid fa-circle-info"
//   },
//   {
//     title: "Services",
//     url: "/services",
//     cName: "nav-links",
//     icon: "fa-solid fa-briefcase"
//   },
//   {
//     title: "Industries",
//     url: "/industries",
//     cName: "nav-links",
//     icon: "fa-solid fa-industry"
//   },
//   {
//     title: "Contact Us",
//     url: "/contact",
//     cName: "nav-links",
//     icon: "fa-solid fa-address-book "
//   }
// ];
export const MenuItems = [
  {
    title: 'Home',
    url: '/',
    cName: 'nav-links',
    icon: 'fa-solid fa-house-user'
  },
  {
    title: 'About Us',
    url: '/about us',
    cName: 'nav-links',
    icon: 'fa-solid fa-circle-info'
  },
  {
    title: 'Services',
    url: '/services',
    cName: 'nav-links',
    icon: 'fa-solid fa-briefcase',
    dropdown: [
      {
        title: 'Website Design Services ',
        url: '/services/service1'
      },
      {
        title: 'Website Development Services ',
        url: '/services/service2'
      },
      {
        title: 'eCommerce Website Development ',
        url: '/services/service1'
      },
      {
        title: 'Mobile Apps Development Company ',
        url: '/services/service2'
      },
      {
        title: 'Digital Marketing ',
        url: '/Service1'
      },
      {
        title: 'CMS Development ',
        url: '/services/service2'
      },
      {
        title: 'CRO Services ',
        url: '/services/service1'
      },
      {
        title: ' Out Sourcing ',
        url: '/services/service2'
      },
      // Add more services here as needed
    ]
  },
  {
    title: 'Industries',
    url: '/industries',
    cName: 'nav-links',
    icon: 'fa-solid fa-industry',
    dropdown: [
      {
        title: 'Real Estate Industry ',
        url: '/industries/industry1'
      },
      {
        title: 'Education Industry ',
        url: '/industries/industry2'
      },
      {
        title: 'Retail Industry ',
        url: '/industries/industry1'
      },
      {
        title: 'Ecommerce Industry ',
        url: '/industries/industry2'
      },
      {
        title: 'IT Industry ',
        url: '/industries/industry1'
      },
      {
        title: 'Healthcare Industry ',
        url: '/industries/industry2'
      },
      {
        title: 'Manufacturing Industry ',
        url: '/industries/industry1'
      },
      {
        title: 'Financial Services Industry ',
        url: '/industries/industry2'
      },
      {
        title: 'Government Industry ',
        url: '/industries/industry2'
      },
      // Add more industries here as needed
    ]
  },
  {
    title: 'Contact Us',
    url: '/contact',
    cName: 'nav-links',
    icon: 'fa-solid fa-address-book'
  }
];