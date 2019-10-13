export const NavigationItems = [
  {
    title: 'Projects',
    tags: 'project',
    icon: 'fal fa-tasks',
    showInApps: {
      stack1Classes: 'color-danger-500',
      stack2Classes: 'color-danger-400',
      iconClasses: 'fal fa-tasks text-white',
      routerLink: '/project'
    },
    routerLink: '/project',
    items: [
      {
        title: 'Create project',
        tags: 'project create',
        routerLink: '/project/create-project'
      },
      {
        title: 'List project',
        tags: 'project list',
        routerLink: '/project/list'
      },
      {
        title: 'Project Invites',
        tags: 'project invites',
        routerLink: '/project/invites'
      },
    ]
  },
  {
    title: 'Clusters',
    tags: 'clusters',
    icon: 'fal fa-certificate',
    showInApps: {
      stack1Classes: 'color-success-500',
      stack2Classes: 'color-success-400',
      iconClasses: 'fal fa-certificate text-white',
      routerLink: '/cluster'
    },
    routerLink: '/cluster',
    items: [
      {
        title: 'add Existing cluster',
        tags: 'add existing cluster',
        routerLink: '/cluster/add'
      },
      {
        title: 'Create Cluster',
        tags: 'cluster create',
        routerLink: '/cluster/create-cluster'
      },
      {
        title: 'List Cluster',
        tags: 'cluster list',
        routerLink: '/cluster/list'
      },
    ]
  },
  {
    title: 'Deployments',
    tags: 'deployments',
    icon: 'fal fa-database',
    routerLink: '/deployment',
    showInApps: {
      stack1Classes: 'color-primary-500',
      stack2Classes: 'color-primary-400',
      iconClasses: 'fal fa-database text-white',
      routerLink: '/deployment'
    },
    items: [
      {
        title: 'Create Deployments Plan',
        tags: 'deployments create',
        routerLink: '/deployment/create'
      },
      {
        title: 'List Deployments Plan',
        tags: 'deployments list',
        routerLink: '/deployment/list'
      },
      {
        title: 'Deployments Invites',
        tags: 'deployments invites',
        routerLink: '/deployment/invites'
      },
    ]
  },
  {
    title: 'Gateways',
    tags: 'gateways',
    icon: 'fal fa-allergies',
    routerLink: '/gateway',
    showInApps: {
      stack1Classes: 'color-info-500',
      stack2Classes: 'color-info-400',
      iconClasses: 'fal fa-allergies text-white',
      routerLink: '/gateway'
    },
    items: [
      {
        title: 'Create Gateway',
        tags: 'gateway create',
        routerLink: '/gateway/create'
      },
      {
        title: 'List Gates',
        tags: 'gates list',
        routerLink: '/gateway/list'
      },
      {
        title: 'Gateway Enrolments',
        tags: 'gateway enrolments',
        routerLink: '/gateway/enrolments'
      },
    ]
  },
  {
    title: 'Collections',
    tags: 'collections',
    icon: 'fal fa-paw',
    showInApps: {
      stack1Classes: 'color-warning-500',
      stack2Classes: 'color-warning-400',
      iconClasses: 'fal fa-paw text-white',
      routerLink: '/collection'
    },
    routerLink: '/collection',
    items: [
      {
        title: 'Create Collection',
        tags: 'collection create',
        routerLink: '/collection/create-collection'
      },
      {
        title: 'List Collections',
        tags: 'collection list',
        routerLink: '/collection/list'
      },
    ]
  },
  {
    title: 'Old pages'
  },
  {
    title: 'Application Intel',
    tags: 'application intel',
    icon: 'fal fa-info-circle',
    items: [
      {
        title: 'Introduction',
        tags: 'application intel introduction',
        routerLink: '/intel/introduction'
      },
      {
        title: 'Privacy',
        tags: 'application intel privacy',
        routerLink: '/intel/privacy'
      }
    ]
  },

  {
    title: 'Theme Settings',
    tags: 'theme settings',
    icon: 'fal fa-cog',
    items: [
      {
        title: 'How it works',
        tags: 'theme settings how it works',
        routerLink: '/settings/how-it-works'
      },
      {
        title: 'Layout Options',
        tags: 'theme settings layout options',
        routerLink: '/settings/layout-options'
      },
      {
        title: 'Skin Options',
        tags: 'theme settings skin options',
        routerLink: '/settings/skin-options'
      },
      {
        title: 'Saving to Database',
        tags: 'theme settings saving to database',
        routerLink: '/settings/saving-db'
      },
    ]
  },

  {
    title: 'Package Info',
    tags: 'package info',
    icon: 'fal fa-tag',
    items: [
      {
        title: 'Product Licensing',
        tags: 'package info product licensing',
        routerLink: '/info/product-licensing'
      },
      {
        title: 'Different Flavors',
        tags: 'package info different flavors',
        routerLink: '/info/different-flavors'
      },
    ]
  },

  {
    title: 'Tools & Components'
  },

  {
    title: 'UI Components',
    tags: 'ui components',
    icon: 'fal fa-window',
    items: [
      {
        title: 'Alerts',
        tags: 'ui components alerts',
        routerLink: '/ui/alerts'
      },
      // {
      //   title: 'Accordions',
      //   tags: 'ui components accordions',
      //   routerLink: '/ui/accordions'
      // },
      {
        title: 'Badges',
        tags: 'ui components badges',
        routerLink: '/ui/badges'
      },
      {
        title: 'Breadcrumbs',
        tags: 'ui components breadcrumbs',
        routerLink: '/ui/breadcrumbs'
      },
      {
        title: 'Button group',
        tags: 'ui components button group',
        routerLink: '/ui/button-group'
      },
      {
        title: 'Buttons',
        tags: 'ui components buttons',
        routerLink: '/ui/buttons'
      },
      {
        title: 'Cards',
        tags: 'ui components cards',
        routerLink: '/ui/cards'
      },
      {
        title: 'Carousel',
        tags: 'ui components carousel',
        routerLink: '/ui/carousel'
      },
      {
        title: 'Collapse',
        tags: 'ui components collapse',
        routerLink: '/ui/collapse'
      },
      {
        title: 'Dropdowns',
        tags: 'ui components dropdowns',
        routerLink: '/ui/dropdowns'
      },
      // {
      //   title: 'Modal',
      //   tags: 'ui components modal',
      //   routerLink: '/ui/modal'
      // },
      {
        title: 'Navbars',
        tags: 'ui components navbars',
        routerLink: '/ui/navbars'
      },
      {
        title: 'Pagination',
        tags: 'ui components pagination',
        routerLink: '/ui/pagination'
      },
      {
        title: 'Panels',
        tags: 'ui components panels',
        routerLink: '/ui/panels'
      },
      {
        title: 'Popovers',
        tags: 'ui components popovers',
        routerLink: '/ui/popovers'
      },
      {
        title: 'Progress Bars',
        tags: 'ui components progress bars',
        routerLink: '/ui/progress-bars'
      },
      {
        title: 'Spinners',
        tags: 'ui components spinners',
        routerLink: '/ui/spinners'
      },
      // {
      //   title: 'Tabs Pills',
      //   tags: 'ui components tabs pills',
      //   routerLink: '/ui/tabs-pills'
      // },
      // {
      //   title: 'Tooltips',
      //   tags: 'ui components tooltips',
      //   routerLink: '/ui/tooltips'
      // },

    ]
  },

  {
    title: 'Font Icons',
    tags: 'font icons',
    icon: 'fal fa-map-marker-alt',
    badge: {
      label: '2500+',
      class: 'dl-ref bg-primary-500 hidden-nav-function-minify hidden-nav-function-top',
    },
    items: [
      {
        title: 'FontAwesome Pro',
        tags: 'font icons fontawesome pro',
        items: [
          {
            title: 'Light',
            tags: 'font icons fontawesome light',
            routerLink: '/icons/font-awesome-light',
          },
          {
            title: 'Regular',
            tags: 'font icons fontawesome regular',
            routerLink: '/icons/font-awesome-regular',
          },
          {
            title: 'Solid',
            tags: 'font icons fontawesome solid',
            routerLink: '/icons/font-awesome-solid',
          },
          {
            title: 'Brand',
            tags: 'font icons fontawesome brand',
            routerLink: '/icons/font-awesome-brand',
          },
        ]
      },
      {
        title: 'NextGen Icons',
        tags: 'font icons nextgen',
        items: [
          {
            title: 'General',
            tags: 'font icons nextgen general',
            routerLink: '/icons/nextgen-general',
          },
          {
            title: 'Base',
            tags: 'font icons nextgen base',
            routerLink: '/icons/nextgen-base',
          }
        ]
      },
      {
        title: 'Stack Icons',
        tags: 'font icons stack',
        items: [
          {
            title: 'Showcase',
            tags: 'font icons stack showcase',
            routerLink: '/icons/stack-icons-showcase',
          },
          {
            title: 'Generate Stack',
            tags: 'font icons stack generate',
            routerLink: '/icons/stack-icons-generate',
          }
        ]
      },
    ]
  },
];
