import React, { Fragment, useState } from 'react';
import styles from '../../components/github-api/user-list/users-index.module.scss';
import { useRouter } from 'next/router';
import UserListPage from '../../components/github-api/user-list/user-list';
import UsersIndexPage from '@/components/github-api/user-list/users-index';
import { getUsers } from '../../helpers/github-util';

function AllUsersPage({ users }) {
  const router = useRouter();
  const { query } = router;
  const page = parseInt(query.page) || 1;
  const [pageNumber, setPageNumber] = useState('');
  const [pageValue, setValue] = useState('');

  const handlePreviousPage = () => {
    if (page > 1) {
      router.push(`/users?page=${page - 1}`);
      setValue(page-1);
    }
  };

  const handleNextPage = () => {
    router.push(`/users?page=${page + 1}`);
    setValue(page+1);
  };

  const handleGoToPage = () => {
    if (pageNumber !== '') {
      setValue(pageNumber);
      router.push(`/users?page=${pageNumber}`);
      setPageNumber('');
    }
  };

  const handlePageNumberChange = (e) => {
    setPageNumber(e.target.value);
  };

  return (
    <Fragment>
      <UsersIndexPage handleGoToPage={handleGoToPage} handleNextPage={handleNextPage} handlePageNumberChange={handlePageNumberChange} handlePreviousPage={handlePreviousPage} page={page} pageNumber={pageNumber} />
      {users.length > 0 ? (
        <UserListPage users={users} />
      ) : (
        <h1 className={styles.errorMessage}>{pageValue} bulunamadı.</h1>
      )}
    </Fragment>
  );
}

export async function getServerSideProps({ query }) {
  const perPage = 10;
  const page = parseInt(query.page) || 1;
  const since = (page - 1) * perPage;  
  const users = await getUsers(perPage, page, since);

  return {
    props: {
      users,
    },
  };
}

export default AllUsersPage;
