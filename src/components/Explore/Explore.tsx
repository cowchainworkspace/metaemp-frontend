import { UserCardsData } from 'constants/userCardsData';
import { FC } from 'react';
import { SearchLine } from './components/SearchLine/SearchLine';
import { UserCard } from './components/UserCard/UserCard';
import './Explore.scss';

export const Explore: FC = () => {
  return (
    <div className="explore">
      <SearchLine />
      <div className="explore__cards">
        {UserCardsData.map(({ photoUrl, userName }) => (
          <UserCard photoUrl={photoUrl} userName={userName} />
        ))}
      </div>
    </div>
  );
};
