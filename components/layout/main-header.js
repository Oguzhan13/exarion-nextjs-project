import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './main-header.module.scss';
import { findUser } from '../../helpers/github-util';

function MainHeader() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/users/${searchTerm}`);
    setSearchTerm('');
  };

  
  return (
    <header className={styles.header}>
      <div>
        <img className="githubIcon" src="/github-icons/github-mark-white.svg" alt="GitHub Logo" />
      </div>
      <div className={styles.logo}>
        <Link href="/">
          <div>
            <h6>Exarion</h6>
            <hr />
            <h6>Home</h6>
          </div>
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <h3><Link href='/users'>Github Kullanıcıları</Link></h3>
          </li>
          <li>
            <form onSubmit={handleSearch}>
              <input
                className={styles.searchBar}
                type="text"
                placeholder="Kullanıcı Adı"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className={styles.btnSearch} type="submit">Ara</button>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export async function getServerSideProps(context) {
  const { username } = context.query;

  await findUser({username});
}

export default MainHeader;
