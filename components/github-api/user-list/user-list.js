import { Fragment } from 'react';
import styles from './user-list.module.scss';
import UserItem from './user-item';

function UserListPage({ users }) {
  return (
    <Fragment>
      <div className={styles.container}>        
        <ul>
          {users.map(user => (
            <UserItem user={user} key={user.id} />
          ))}
        </ul>
      </div>      
    </Fragment>
  );
}

export default UserListPage;
