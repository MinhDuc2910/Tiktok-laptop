import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Home.module.scss';
import MainBox from '../../components/MainBox/MainBox';
import * as request from '~/utils/httpRequest';

const cx = classNames.bind(styles);

function Home() {
    const [accountItem, setAccountItem] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await request.get('users/search?q=l&type=more');
                setAccountItem(response.data);
            } catch (error) {
                console.log('Failed to fetch users:', error);
            }
        };
        fetchApi();
    }, [accountItem]);

    return (
        <div className={cx('main')}>
            <div className={cx('main-container')}>
                {accountItem.map((result) => (
                    <MainBox key={result.id} data={result} />
                ))}
            </div>
        </div>
    );
}

export default Home;
