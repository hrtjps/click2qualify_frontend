export const NavigationItems = [
  {
    title: 'Users',
    tags: 'user',
    icon: 'fal fa-tasks',
    routerLink: '/admin/users',
    items: [
      {
        title: 'User List',
        tags: 'user list',
        routerLink: '/admin/users/list'
      },
      {
        title: 'Add User',
        tags: 'add user',
        routerLink: '/admin/users/add'
      },
    ]
  },
];
