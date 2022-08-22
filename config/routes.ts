interface IRouteProps {
  path: string;
  component: string;
  exact: boolean;
}
const routes: IRouteProps[] = [
  { path: '/', component: '@/pages/index', exact: true },
  { path: '/question', component: '@/pages/question', exact: true },
  { path: '/result', component: '@/pages/result', exact: true },
];

export default routes;
