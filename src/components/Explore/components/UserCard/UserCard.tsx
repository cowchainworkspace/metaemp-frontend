import { UserCardProps } from 'constants/types/UserCardProps';
import React from 'react';
import './UserCard.scss';

export const UserCard: React.FC<UserCardProps> = ({ photoUrl, userName }) => {
  return (
    <div className="card">
      <img src={photoUrl} alt="wrong" className="card__photo" />
      <div className="card__userName">{userName}</div>
      <button className="card__button-more button">More</button>
    </div>
  );
};
