export const NavigationItems = [
  {
    title: 'Home - Tax List',
    tags: 'home tax list',
    icon: 'fal fa-home',
    routerLink: '/user-tax-list'
  },
  {
    title: "User Tax QA",
    tags: "user tax qa",
    icon: "fal fa-info-circle",
    routerLink: "/user-tax-qa",
  },
  {
    title: "User Tax Form",
    tags: "user tax forms",
    icon: "fal fa-info-circle",
    routerLink: "/user-tax-form",
  },
  {
    title: "Administrator"
  },
  {
    title: "Admin Dashboard",
    tags: "admin dashboard",
    icon: "fal fa-chart-area",
    routerLink: "/admin/dashboard",
  },
  {
    title: "Question Management",
    tags: 'question management',
    icon: 'fal fa-list',
    routerLink: '/admin/questions',
    items: [
      {
        title: 'Question List',
        tags: 'question list',
        icon: "fal fa-list-alt",
        routerLink: '/admin/questions'
      },
      {
        title: 'Add Question',
        tags: 'add Question',
        icon: "fal fa-file-plus",
        routerLink: '/admin/questions/add'
      },
    ]
  },
  {
    title: "Customer Form",
    tags: "customer form",
    icon: "fal fa-book",
    routerLink: "/admin/customer-form",
  },
  {
    title: 'Users',
    tags: 'user',
    icon: 'fal fa-user-secret',
    routerLink: '/admin/users',
    items: [
      {
        title: 'User List',
        tags: 'user list',
        icon: "fal fa-users",
        routerLink: '/admin/users/list'
      },
      {
        title: 'Add User',
        tags: 'add user',
        icon: "fal fa-user-plus",
        routerLink: '/admin/users/add'
      },
    ]
  },
  {
    title: "Profile",
    tags: "",
    icon: "fal fa-cogs",
    routerLink: "/profile",
  },
  {
    title: "",
    tags: "",
    icon: "fal fa-",
    routerLink: "",
  },
  {
    title: "",
    tags: "",
    icon: "fal fa-",
    routerLink: "",
  },
  {
    title: "Contact US",
    tags: "contact us",
    icon: "fal fa-phone",
    routerLink: "/contact-us",
  },
  {
    title: "Logout",
    tags: "",
    icon: "fal fa-sign-out-alt",
    routerLink: "",
  },
];
