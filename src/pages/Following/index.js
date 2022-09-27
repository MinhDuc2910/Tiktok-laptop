import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Following.module.scss';
import MainBox from '../../components/MainBox/MainBox';
import Users from '~/FakeApi/Users';

const cx = classNames.bind(styles);

function Following() {
    const [accountItem, setAccountItem] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await Users.GetAll();
                setAccountItem(response[0].data);
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

export default Following;
