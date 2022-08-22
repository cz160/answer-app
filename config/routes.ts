interface IRouteProps {
  path: string;
  component: string;
}
const routes: IRouteProps[] = [{ path: '/', component: '@/pages/index' }];

export default routes;
