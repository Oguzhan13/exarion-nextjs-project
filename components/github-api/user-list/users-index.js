import React, { Fragment } from 'react';
import styles from './users-index.module.scss';

function UsersIndexPage({handlePreviousPage, handleNextPage, handlePageNumberChange, handleGoToPage, page, pageNumber}) {
    return (
        <Fragment>
            <div className={styles.container}>
                <button
                    id={styles.btnPage}
                    onClick={handlePreviousPage}
                    disabled={page === 1}
                >
                Önceki
                </button>       
                <button id={styles.btnPage} onClick={handleNextPage}>
                Sonraki
                </button>
                {/* Sayfa numarası ile arama çubuğu */}
                <input
                    id={styles.searchBox}
                    type='text'
                    value={pageNumber}
                    onChange={handlePageNumberChange}
                    placeholder='Sayfa numarası'
                />
                <button id={styles.btnPage} onClick={handleGoToPage}>
                    Git
                </button>
            </div>
        </Fragment>
    )
}

export default UsersIndexPage;