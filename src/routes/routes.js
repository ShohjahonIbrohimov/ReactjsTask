import { Signin, Home, TicketList } from '../pages';


export const ROUTES = [
    {
        path: "/",
        key: "APP_ROOT",
        exact: true,
        component: () => <Home />
    },
    {
        path: "/tickets",
        key: "APP_TICKET_LIST",
        exact: true,
        component: () => <TicketList />
    },

];

export const ROUTES_SIGN_IN_SIGN_UP = [
    {
        path: "/login",
        key: "APP_SIGN_IN",
        exact: true,
        component: Signin
    }
]