import styles from './VoteStats.module.css';
import type { Votes } from '../../types/votes';

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

const VoteStats: React.FC<VoteStatsProps> = ({ votes, totalVotes, positiveRate }) => {
  return (
    <div className={styles.container}>
      <div className={styles.stat}><span>Good:</span> <strong>{votes.good}</strong></div>
      <div className={styles.stat}><span>Neutral:</span> <strong>{votes.neutral}</strong></div>
      <div className={styles.stat}><span>Bad:</span> <strong>{votes.bad}</strong></div>
      <div className={styles.stat}><span>Total:</span> <strong>{totalVotes}</strong></div>
      <div className={styles.stat}><span>Positive:</span> <strong>{positiveRate}%</strong></div>
    </div>
  );
};

export default VoteStats;