import Link from './Link';

const Profile = ({ name, viewProfile, logout }) => {
  return (
    <div>
      Welcome, { name}
      <hr />
      <Link onClick={viewProfile}>Profile</Link><br />
      <Link onClick={logout}>Log out</Link><br />
    </div>
  );
}

export default Profile;