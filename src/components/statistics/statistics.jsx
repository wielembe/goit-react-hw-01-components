import css from './statistics.module.css';
import propTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title !== undefined && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statsList}>
        {stats.map(stat => (
          <li key={stat.id} className={css.item}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string.isRequired,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};
