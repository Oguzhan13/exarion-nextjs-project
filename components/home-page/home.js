import Link from 'next/link';
import { Fragment } from 'react';
import styles from './home.module.scss';
import ArrowRightIcon from '../icons/arrow-right-icon';

function HomePage() {
  return (
    <Fragment>
      <div className={styles.container}>
        <div>
          <h1>Hoşgeldiniz</h1>      
        </div>
        <div>
          <img className={styles.githubIcon} src="/github-icons/github-mark.png" alt="GitHub Logo" />
        </div>
        <div className={styles.githubLink}>
          <div>
          <h3>Github Kullanıcı Listesi</h3>
          </div>
          <div>
          <Link href="/users"><ArrowRightIcon className={styles.arrowIcon}/></Link>
          </div>          
        </div>
      </div>      
    </Fragment>    
  )
}

export default HomePage;
