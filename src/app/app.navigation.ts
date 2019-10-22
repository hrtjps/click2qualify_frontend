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
    title: "Common Info"
  },
  {
    title: "Profile",
    tags: "",
    icon: "fal fa-cogs",
    routerLink: "/common-info/profile",
  },
  {
    title: "Contact US",
    tags: "contact us",
    icon: "fal fa-phone",
    routerLink: "/common-info/contact-us",
  },
  {
    title: "Administrator",
    role: "admin",
  },
  {
    title: "Admin Dashboard",
    tags: "admin dashboard",
    icon: "fal fa-chart-area",
    routerLink: "/admin/dashboard",
    role: "admin",
  },
  {
    title: "Question Management",
    tags: 'question management',
    icon: 'fal fa-list',
    routerLink: '/admin/questions',
    role: "admin",
    items: [
      {
        title: 'Question List',
        tags: 'question list',
        icon: "fal fa-list-alt",
        routerLink: '/admin/questions',
        role: "admin",
      },
      {
        title: 'Add Question',
        tags: 'add Question',
        icon: "fal fa-file-plus",
        role: "admin",
        routerLink: '/admin/questions/add'
      },
    ]
  },
  {
    title: "Customer Form",
    tags: "customer form",
    icon: "fal fa-book",
    role: "admin",
    routerLink: "/admin/customer-form",
  },
  {
    title: 'Users',
    tags: 'user',
    icon: 'fal fa-user-secret',
    routerLink: '/admin/users',
    role: "admin",
    items: [
      {
        title: 'User List',
        tags: 'user list',
        icon: "fal fa-users",
        role: "admin",
        routerLink: '/admin/users/list'
      },
      {
        title: 'Add User',
        tags: 'add user',
        icon: "fal fa-user-plus",
        role: "admin",
        routerLink: '/admin/users/add'
      },
    ]
  },
];
