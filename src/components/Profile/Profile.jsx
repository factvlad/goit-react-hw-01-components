import s from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  return (
    <>
      <div className={s.profile}>
        <div className={s.description}>
          <img className={s.avatar} src={user.avatar} alt="User avatar" />
          <p className={s.name}>{user.username}</p>
          <p className={s.tag}>@{user.tag}</p>
          <p className={s.location}>{user.location}</p>
        </div>

        <ul
          className={s.stats}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <li>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}> {user.stats.followers}</span>
          </li>
          <li>
            <span className={s.label}>Views</span>
            <span className={s.quantity}> {user.stats.views}</span>
          </li>
          <li>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}> {user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};


Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired
    }),
    tag: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })
}

export default Profile;
