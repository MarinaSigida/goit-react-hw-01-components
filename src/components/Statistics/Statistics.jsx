import css from './Statistics.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && (
        <h2 className={css.title}>
          {title}
        </h2>
      )}
      <ul className={css.statList}>
        {stats.map(list => (
          <li
            className={css.item}
            key={list.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{list.label}</span>
            <span className={css.percentage}>{list.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired
  ).isRequired,
};
