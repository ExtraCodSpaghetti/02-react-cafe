import React from 'react';
import styles from './VoteStats.module.css';

interface VoteStatsProps {
  good: number;
  neutral: number;
  bad: number;
}

const VoteStats: React.FC<VoteStatsProps> = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positive = total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <div className={styles.container}>
      <div className={styles.stat}><span>Good:</span> <strong>{good}</strong></div>
      <div className={styles.stat}><span>Neutral:</span> <strong>{neutral}</strong></div>
      <div className={styles.stat}><span>Bad:</span> <strong>{bad}</strong></div>
      <div className={styles.stat}><span>Total:</span> <strong>{total}</strong></div>
      <div className={styles.stat}><span>Positive:</span> <strong>{positive}%</strong></div>
    </div>
  );
};

export default VoteStats;