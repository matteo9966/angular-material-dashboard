export const routesConfig = {
  dashboard: {
    routerPath: 'dashboard',
    label: 'Dashboard',
    routerLink: '/dashboard',
    childRoutes: {
      home: {
        routerPath: 'home',
        routerLink: '/dashboard/home',
        label: 'Home',
      },
      tableData: {
        routerPath: 'table-data',
        routerLink: '/dashboard/table-data',
        label: 'Table Data',
      },
      profile: {
        routerPath: 'profile',
        routerLink: '/dashboard/profile',
        label: 'Profile',
      },
      fitness:{
        routerPath:'fitness',
        routerLink:'/dashboard/fitness',
        label:'Fitness',
      }
    },
  },
  signup: {
    routerPath: 'signup',
    label: 'Signup',
    routerLink:''
  },
} ;
