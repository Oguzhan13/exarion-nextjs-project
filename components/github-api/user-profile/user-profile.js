import { Fragment } from "react";
import styles from './user-profile.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import AddressIcon from "../../icons/address-icon";
import ArrowRightIcon from "../../icons/arrow-right-icon";

function UserProfile({ userName, userProfile }) {
    const adminIcon = userProfile.site_admin ? (
        <FontAwesomeIcon icon={faCheck} className={styles.adminIcon} />
      ) : (
        <FontAwesomeIcon icon={faTimes} className={styles.notAdminIcon} />
      );    

    return (
        <Fragment>
            <div className={styles.container}>
                <div>
                    <img
                        className={styles.avatar}
                        src={userProfile.avatar_url}
                        alt={userName}
                    />
                </div>
                <div className={styles.card}>
                    <ul className={styles.key}>
                        <li>Yönetici mi?</li>
                        <li>Rol</li>
                        <li>Id</li>
                        <li>Kullanıcı Adı</li>
                        <li>Adı</li>
                        <li>Github Adresi</li>
                        <li>Takipçi Sayısı</li>
                        <li>Takip Edilen Sayısı</li>
                        <li><div className={styles.addressIcon}><AddressIcon /></div></li>
                        <li>Biyografi</li>
                    </ul>
                    <ul className={styles.value}>
                        <li> : {adminIcon}</li>
                        <li> : {userProfile.type}</li>
                        <li> : {userProfile.id}</li>
                        <li> : {userName}</li>
                        <li> : {userProfile.name}</li>
                        <li> : <Link href={userProfile.html_url} target="_blank">
                            {userProfile.html_url}   <button className={styles.btnProfile}><ArrowRightIcon className={styles.arrowIcon} /></button>
                            </Link></li>
                        <li> : {userProfile.followers}</li>
                        <li> : {userProfile.following}</li>                        
                        <li> : {userProfile.location}</li>
                        <li> : {userProfile.bio}</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default UserProfile;
