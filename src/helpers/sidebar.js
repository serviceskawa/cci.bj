export const routes = () => [
    {
        title: 'sidebar.stats',
        url: "#",
        icon: "mdi mdi mdi-shape-outline ",
        childrens: [
            {
                title: 'MTN SSO',
                icon: "mdi mdi-chart-gantt",
                description: "Dashboard",
                submenus: [],
                name: 'home',
            },
            {
                title: "MTN Selfcare",
                icon: "mdi mdi-chart-areaspline",
                description: "Dashboard",
                submenus: [],
                name: 'stats-selfcare',
            }
        ],
    },
    {
        title: 'Abonnés',
        url: "#",
        icon: "mdi mdi-account-group",
        childrens: [
            {
                title: 'sidebar.users.list_title',
                icon_letter: "L",
                description: "",
                submenus: [],
                name: 'users-list',
            }
        ],
    },
    {
        title: 'Utilisateurs',
        url: "#",
        icon: "mdi mdi-account-tie",
        childrens: [
            {
                title: 'sidebar.admins.add_title',
                icon: "mdi mdi-account-plus-outline",
                description: "",
                submenus: [],
                name: 'admins-add',
            },
            {
                title: 'sidebar.admins.list_title',
                icon_letter: "L",
                description: "",
                submenus: [],
                name: 'admins-list',
            },
            {
                title: 'Journal',
                icon_letter: "J",
                description: "",
                submenus: [],
                name: 'admins-logs',
            }
        ],
    },
]