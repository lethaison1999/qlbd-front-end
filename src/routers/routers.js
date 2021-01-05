import { Error404 } from '../components/404';
import Login from '../components/login';
import Matches from '../components/matches';
import Clubs from '../components/clubs';
import Match from '../components/match';
import Club from '../components/club';
import { MatchAdd } from '../components/match-add';
import ClubAdd from '../components/club-add';
import ClubEdit from '../components/club-edit';

export const routers = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/clubs',
    component: Clubs
  },
  {
    path: '/clubs/:id',
    component: Club
  },
  {
    path: '/clubs/manage/add',
    component: ClubAdd,
    isPrivate: true
  },
  {
    path: '/clubs/manage/edit/:id',
    component: ClubEdit,
    isPrivate: true
  },
  {
    path: '/matches',
    component: Matches
  },
  {
    path: '/matches/:id',
    component: Match
  },
  {
    path: '/matchs/manage/add',
    component: MatchAdd,
    isPrivate: true
  },
  {
    path: '/error/404',
    component: Error404
  },
]