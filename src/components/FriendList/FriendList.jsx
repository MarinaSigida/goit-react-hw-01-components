import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import { Friend } from './Friend/Friend';


export const FriendList = ({friends})=>{
return <ul className={css.friendList}>
{friends.map(({ avatar, name, isOnline, id }) => {
return <Friend avatar={avatar} name={name} isOnline={isOnline} key={id} />;
})}
</ul>
}

FriendList.propTypes  = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id:PropTypes.number.isRequired,
        }))
}