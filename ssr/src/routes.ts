import { CurrentUserHeader } from "./components/CurrentUserHeader/CurrentUserHeader";
import { SecondsCounter } from "./components/SecondsCounter/SecondsCounter";
import { StaticHelloComponent } from "./components/StaticHelloComponent/StaticHelloComponent";

export interface RouteSchema {
  key: string;
  path: string;
  component: React.ComponentClass | React.FunctionComponent;
}

export const ROUTES: RouteSchema[] = [
  {
    key: 'counter',
    path: '/counter',
    component: SecondsCounter,
  },
  {
    key: 'user',
    path: '/user',
    component: CurrentUserHeader,
  },
  {
    key: 'main',
    path: '/',
    component: StaticHelloComponent,
  },
];