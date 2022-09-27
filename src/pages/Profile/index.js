import styles from './Profile.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('main')}>
            <div className={cx('main-container')}></div>
        </div>
    );
}

export default Profile;
