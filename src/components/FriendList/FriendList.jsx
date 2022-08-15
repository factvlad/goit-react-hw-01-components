import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={ s.friendList }>
        { friends.map(({ id, ...prop }) => (
          <FriendListItem
            key={ id }
            { ...prop }
          />
        )) }
      </ul>
    </>
  );
};

FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
export default FriendList;
