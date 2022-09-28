import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import Button from '~/components/Button';

import { MoreAction, StyledShareIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <Header className={cx('width-header')} />
            <div className={cx('container')}>
                <Sidebar className={cx('width-sidebar')} />
                <div className={cx('profile-container')}>
                    <div className={cx('information-profile')}>
                        <div className={cx('box-profile')}>
                            <div className={cx('box-avatar')}>
                                <img
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1664438400&x-signature=cMgHVkYF2z6yuq3mnqV9dnbjNSY%3D"
                                    className={cx('avatar')}
                                    alt=""
                                />
                            </div>
                            <div className={cx('box-imformation')}>
                                <div className={cx('box-title')}>
                                    <h3 className={cx('nickname')}>tiin.vn</h3>
                                    <p className={cx('full-name')}>Tiin.vn</p>
                                </div>
                                <div className={cx('box-button')}>
                                    <Button primary large className={cx('button-btn')}>
                                        Follow
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('count-infos')}>
                            <div className={cx('box-parameter')}>
                                <strong className={cx('number')}>2</strong>
                                <span className={cx('text')}>Following</span>
                            </div>
                            <div className={cx('box-parameter')}>
                                <strong className={cx('number')}>1</strong>
                                <span className={cx('text')}>Followers</span>
                            </div>
                            <div className={cx('box-parameter')}>
                                <strong className={cx('number')}>4</strong>
                                <span className={cx('text')}>Likes</span>
                            </div>
                        </div>
                        <h2 className={cx('contact-info')}>
                            Trang tin giới trẻ hàng đầu <br /> For Work: 0969161718 <br /> Email: hoptac@viettel.com.vn
                        </h2>
                        <div></div>
                        <div className={cx('box-icons')}>
                            <div className={cx('share-icon')}>
                                <StyledShareIcon />
                            </div>
                            <div>
                                <MoreAction />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
