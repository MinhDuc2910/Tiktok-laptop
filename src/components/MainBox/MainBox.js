import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MainBox.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function MainBox({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main-box')}>
                <div className={cx('box-image')}>
                    <img className={cx('image')} src={data.avatar} alt="" />
                </div>
                <div className={cx('content')}>
                    <div className={cx('title')}>
                        <h3 className={cx('author-title')}>{data.nickname}</h3>
                        <h4 className={cx('author-name')}>{data.full_name}</h4>
                    </div>
                    <div className={cx('title')}>
                        <span className={cx('span-text')}>{data.bio}</span>
                        <strong className={cx('strong-text')}>{data.nickname}</strong>
                    </div>
                    <div className={cx('video-container')}>
                        <div className={cx('video-box')}>
                            <div className={cx('video')}>
                                <video className={cx('video-btn')} src={data.video} type="video/mp4" controls></video>
                            </div>
                        </div>
                    </div>
                    <div className={cx('button')}>
                        <Button outline small>
                            Follow
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

MainBox.propTypes = {
    data: PropTypes.object.isRequired,
};

export default MainBox;
