import PropTypes from 'prop-types';
import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import AccountItemSidebar from './AccountItemSidebar';
import { useEffect } from 'react';
import Users from '~/FakeApi/Users';

const cx = classNames.bind(styles);

function Account({ label, see }) {
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
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {accountItem.map((result) => (
                <AccountItemSidebar key={result.id} data={result} />
            ))}
            <p className={cx('see')}>{see}</p>
        </div>
    );
}

Account.propTypes = {
    label: PropTypes.node.isRequired,
    see: PropTypes.string,
};
export default Account;
