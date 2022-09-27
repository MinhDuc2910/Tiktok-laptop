import classNames from 'classnames/bind';

import styles from './LiveLayout.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import images from '~/assets/images';
import { FollowingIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function LiveLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header className={cx('width-header')} />
            <div className={cx('container')}>
                <Sidebar className={cx('width-sidebar')} />
                <div className={cx('layout-live')}>
                    <div className={cx('container-live')}>
                        <div className={cx('box-live')}>
                            <div className={cx('box-video')}>
                                <div className={cx('video-live')}>
                                    <video
                                        className={cx('video')}
                                        src="https://v16-webapp.tiktok.com/79304dbfb1cfb73d1d4ee2281509eb41/632dfc11/video/tos/useast2a/tos-useast2a-pve-0037-aiso/d4aa25af4b3b40f6920e99ff08c790cb/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1866&bt=933&cs=0&ds=3&ft=z_piDPWT2NvjVEMilozfuaYQFAe4nRQjlA-.7eOB&mime_type=video_mp4&qs=0&rc=ZWc2NWY3aTtnNTlpOTQ3ZkBpamt2MzY6ZjhpZTMzZjgzM0AzLTZfNmMxNl8xMDAwLi42YSNycy81cjRfajNgLS1kL2Nzcw%3D%3D&l=202209231732340102510651020543D62C&btag=80000"
                                    ></video>
                                </div>
                                <div className={cx('header-box-video')}>
                                    <div className={cx('box-1')}>
                                        <div className={cx('box-avatar')}>
                                            <img className={cx('avatar')} src={images.image} alt=" " />
                                        </div>
                                        <div className={cx('box-1-tab')}>
                                            <div className={cx('title-box-1')}>Đẹp Trai Thế Nhề</div>
                                            <p className={cx('nick-name')}>huanhoahong</p>
                                        </div>
                                    </div>
                                    <div className={cx('box-2')}>
                                        <div className={cx('box-2-tab')}>
                                            <FollowingIcon width="2.2rem" height="2.2rem" />
                                            <div className={cx('Div-people-counter')}>3.4K</div>
                                        </div>
                                        <div className={cx('button-live')}>LIVE</div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('tab-live')}>
                                <div className={cx('tab')}>
                                    <div className={cx('avatar-tab')}>
                                        <img src="" alt="" />
                                    </div>
                                    <div className={cx('name-room')}>Huấn Hoa Hồng Đây</div>
                                </div>
                                <div className={cx('tab')}>
                                    <div className={cx('avatar-tab')}>
                                        <img src="" alt="" />
                                    </div>
                                    <div className={cx('name-room')}>Huấn Hoa Hồng Đây</div>
                                </div>
                                <div className={cx('tab')}>
                                    <div className={cx('avatar-tab')}>
                                        <img src="" alt="" />
                                    </div>
                                    <div className={cx('name-room')}>Huấn Hoa Hồng Đây</div>
                                </div>
                                <div className={cx('tab')}>
                                    <div className={cx('avatar-tab')}>
                                        <img src="" alt="" />
                                    </div>
                                    <div className={cx('name-room')}>Huấn Hoa Hồng Đây</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('footer')}>
                        <h2 className={cx('header-footer')}>Recommended LIVE videos</h2>
                        <div className={cx('footer-container')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LiveLayout;
