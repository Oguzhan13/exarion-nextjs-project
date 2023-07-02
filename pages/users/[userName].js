import { Fragment } from 'react';
import { useRouter } from 'next/router';
import UserProfile from '../../components/github-api/user-profile/user-profile';

function UserNamePage({ userProfile }) {
  const router = useRouter();
  const { userName } = router.query;

  return (
    <Fragment>
      {/* Kullanıcı profilini gösteren bileşen */}
      <UserProfile userName={userName} userProfile={userProfile} />
    </Fragment>
  );
}

export async function getServerSideProps({ params }) {
  const { userName } = params;
  const response = await fetch(`https://api.github.com/users/${userName}`);
  
  if (response.ok) {
    const userProfile = await response.json();
    
    return {
      props: {
        userProfile,
      },
    };
  } else {
    // Kullanıcı bulunamadı, 404 sayfasına yönlendir
    return {
      notFound: true,
    };
  }
}

export default UserNamePage;
