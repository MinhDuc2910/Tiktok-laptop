import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Button from '~/components/Button';
import { SortDownIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer-container')}>
                <div className={cx('footer-box')}>
                    <div className={cx('box-image')}>
                        <img
                            className={cx('image')}
                            src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg"
                            alt=" tiktok"
                        />
                        <img
                            src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg"
                            alt="Tiktok"
                        />
                    </div>

                    <div className={cx('footer-row')}>
                        <div className={cx('footer-container-column')}>
                            <h4 className={cx('sub-title')}>Company</h4>
                            <span className={cx('icon-sub-column')}>About</span>
                            <span className={cx('icon-sub-column')}>TikTok Browse</span>
                            <span className={cx('icon-sub-column')}>Newsroom</span>
                            <span className={cx('icon-sub-column')}>Contact</span>
                            <span className={cx('icon-sub-column')}>Careers</span>
                            <span className={cx('icon-sub-column')}>ByteDance</span>
                        </div>
                        <div className={cx('footer-container-column')}>
                            <h4 className={cx('sub-title')}>Programs</h4>
                            <span className={cx('icon-sub-column')}>TikTok for Good</span>
                            <span className={cx('icon-sub-column')}>Advertise</span>
                            <span className={cx('icon-sub-column')}>Developers</span>
                            <span className={cx('icon-sub-column')}>TikTok Rewards</span>
                        </div>
                        <div className={cx('footer-container-column')}>
                            <h4 className={cx('sub-title')}>Support</h4>
                            <span className={cx('icon-sub-column')}>Help Center</span>
                            <span className={cx('icon-sub-column')}>Safety Center</span>
                            <span className={cx('icon-sub-column')}>Creator Portal</span>
                            <span className={cx('icon-sub-column')}>Community Guidelines</span>
                            <span className={cx('icon-sub-column')}>Transparency</span>
                            <span className={cx('icon-sub-column')}>Accessibility</span>
                        </div>
                        <div className={cx('footer-container-column')}>
                            <h4 className={cx('sub-title')}>Legal</h4>
                            <span className={cx('icon-sub-column')}>Terms of Use</span>
                            <span className={cx('icon-sub-column')}>Privacy Policy</span>
                        </div>
                    </div>
                </div>
                <div className={cx('button')}>
                    <Button className={cx('button-btn')} upload>
                        English
                    </Button>
                    <SortDownIcon className={cx('icon-btn')} />
                </div>
            </div>
        </div>
    );
}

export default Footer;
