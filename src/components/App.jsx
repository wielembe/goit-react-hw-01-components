import { Profile } from 'components/profile/profile';
import user from '../json/user.json';
import data from '../json/data.json';
import { Statistics } from './statistics/statistics';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
