

import Notification from '../Notification/Notification';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import CafeInfo from '../CafeInfo/CafeInfo';
import css from './App.module.css';
import type { Votes, VoteType } from '../../types/votes';
import { useState } from 'react';

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalVotes = votes.good + votes.neutral + votes.bad;

  const handleVote = (type: VoteType) => {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0} />
      {totalVotes > 0 ? (
        <VoteStats good={votes.good} neutral={votes.neutral} bad={votes.bad} />
      ) : (
        <Notification />
      )}
    </div>
  );
}


