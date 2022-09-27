import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, className, fallBack: customFallback = images.image, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };
    return (
        // eslint-disable-next-line jsx-a11y/alt-text

        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallBack || src}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
