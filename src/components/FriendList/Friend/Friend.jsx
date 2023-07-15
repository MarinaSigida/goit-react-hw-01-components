import PropTypes from 'prop-types'
import css from './Friend.module.css'

export const  Friend = ({avatar, name, isOnline}) =>  {
  return <li className={css.item} >
    <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="32" />
    <p className={css.name}>{name}</p>
  </li>
}


Friend.propTypes = {
  avatar: PropTypes.string,
  name:PropTypes.string,
  isOnline: PropTypes.bool,
}