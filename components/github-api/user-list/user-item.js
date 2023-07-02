import { Fragment } from 'react';
import Link from 'next/link';
import styles from './user-item.module.scss';
import ArrowRightIcon from '../../icons/arrow-right-icon';

function UserItem({user}) {
  const profileLink = `/users/${user.login}`;
  return (
    <Fragment key={user.id}>
      <div className={styles.card}>
        <div>
          <Link href={profileLink}>
            <img
              className={styles.profilePhoto}
              src={user.avatar_url}
              alt={user.type}
            />
          </Link>
        </div>
        <div className={styles.items}>
          <div className={styles.itemKey}>
            <li>Rol: </li>
            <li>ID: </li>
            <li>Profil Adresi: </li>
            <li>Profil Adı: </li>
          </div>
          <div className={styles.itemValue}>
            <li>{user.type}</li>
            <li>{user.id}</li>
            <li>
              <Link href={profileLink}>
                {user.login}  <button className={styles.btnProfile}><ArrowRightIcon className={styles.arrowIcon}/></button>
              </Link>
            </li>
            <li>{user.html_url}</li>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default UserItem;
