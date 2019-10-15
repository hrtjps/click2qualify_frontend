export const NavigationItems = [
  {
    title: 'Home',
    tags: 'home',
    icon: 'fal fa-home',
    routerLink: '/home'
  },
  {
    title: "User Answer Status",
    tags: "user answer status",
    icon: "fal fa-question-circle",
    routerLink: "/user-answer",
  },
  {
    title: "User Forms",
    tags: "user forms",
    icon: "fal fa-info-circle",
    routerLink: "/user-forms",
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
