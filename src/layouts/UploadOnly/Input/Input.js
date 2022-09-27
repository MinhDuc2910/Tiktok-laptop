import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faHashtag } from '@fortawesome/free-solid-svg-icons';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ title, className = cx('input-caption') }) {
    return (
        <div className={cx('caption')}>
            <span>{title}</span>
            <input className={className} placeholder={title} />
            <div className={cx('icons-end')}>
                <FontAwesomeIcon className={cx('icon-input')} icon={faAt} />
                <FontAwesomeIcon className={cx('icon-input')} icon={faHashtag} />
            </div>
        </div>
    );
}

Input.propTyles = {
    title: PropTypes.string.isRequired,
};

export default Input;
