import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountPrevew.module.scss';
import Button from '~/components/Button';

function AccountPrevew({ data }) {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <header className={cx('header')}>
                    <img className={cx('avatar')} src={data.avatar} alt="" />
                    <Button primary>Follow</Button>
                </header>

                <div className={cx('box')}>
                    <h4 className={cx('nick-name')}>
                        {data.nickname}
                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </h4>
                    <p className={cx('name')}>{data.full_name}</p>
                </div>

                <div className={cx('box-end')}>
                    <div className={cx('span')}>
                        <span className={cx('count')}>{data.followings_count}</span>
                        <span className={cx('text-end')}>Followers</span>
                    </div>
                    <div className={cx('span')}>
                        <span className={cx('count')}>{data.likes_count}</span>
                        <span className={cx('text-end')}>Likes</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountPrevew;
