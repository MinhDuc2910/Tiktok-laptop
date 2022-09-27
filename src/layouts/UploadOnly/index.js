import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

import styles from './UploadOnly.module.scss';
import Header from '~/layouts/components/Header';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import Input from './Input/Input';
import Footer from './Footer';

const cx = classNames.bind(styles);
function UploadOnly() {
    return (
        <>
            <div className={cx('wrapper')}>
                <Header className={cx('width-header')} />
                <div className={cx('layout')}>
                    <PopperWrapper>
                        <div className={cx('container')}>
                            <div className={cx('text-header')}>
                                <p className={cx('text1')}>Upload video</p>
                                <p className={cx('text2')}>Post a video to your account</p>
                            </div>

                            <div className={cx('content')}>
                                <div className={cx('sidebar')}>
                                    <div className={cx('upload-stage')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faCloudArrowUp} />
                                        <div className={cx('select')}>Select video to upload</div>
                                        <div className={cx('select-1')}>Or drag and drop a file</div>
                                        <div className={cx('tab')}>MP4 or WebM</div>
                                        <div className={cx('tab')}>720x1280 resolution or higher</div>
                                        <div className={cx('tab')}>Up to 10 minutes</div>
                                        <div className={cx('tab')}>Less than 2 GB</div>
                                        <div className={cx('button')}>
                                            <Button primary>Select file</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('form')}>
                                    <Input title="Caption" />
                                    <Input title="Cover" className={cx('input-cover')} />
                                </div>
                            </div>
                        </div>
                    </PopperWrapper>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default UploadOnly;
