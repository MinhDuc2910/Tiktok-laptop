import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy2 from '@tippyjs/react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/tippy.css';
import {
    FeedbackIcon,
    GetCoinIcon,
    InboxTcon,
    KeyboardIcon,
    LanguageIcon,
    LogOutIcon,
    MessageIcon,
    SettingIcon,
    TabIcon,
    ViewIcon,
} from '~/components/Icons';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';

import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'italia',
                    title: 'Italiano',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'italia',
                    title: 'Italiano',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'italia',
                    title: 'Italiano',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'italia',
                    title: 'Italiano',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'italia',
                    title: 'Italiano',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'italia',
                    title: 'Italiano',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'italia',
                    title: 'Italiano',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'italia',
                    title: 'Italiano',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <ViewIcon />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <GetCoinIcon />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <LogOutIcon />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header({ className }) {
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                ////////////////////////////////
                break;
            default:
        }
    };

    let currentUser = true;
    function handleOnclickButton() {}

    return (
        <header className={cx('wrapper')}>
            <div className={className || cx('inner')}>
                <Link to={config.routes.home} className="logo-link">
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />} to="/upload">
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy2 content="Messages" placement="bottom">
                                <button className={cx('more-btn')}>
                                    <MessageIcon width="24px" height="24px" />
                                </button>
                            </Tippy2>
                            <Tippy2 content="Inbox" placement="bottom">
                                <button className={cx('more-btn')}>
                                    <InboxTcon width="32px" height="32px" />
                                </button>
                            </Tippy2>
                        </>
                    ) : (
                        <>
                            <Button primary onClick={handleOnclickButton}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <div className={cx('box-avatar')}>
                                <Image
                                    className={cx('user-avatar')}
                                    src="https:///pp16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d5d7b58b1a7f01f757e6639d0f9aeb83~c5_100x100.jpeg?x-expires=1663322400&x-signature=ZS4pmKdckFcFkqqZXia6wxfLDGs%3D"
                                    alt="ảnh"
                                    fallback={images.image}
                                />
                            </div>
                        ) : (
                            <button className={cx('more-btn')}>
                                <TabIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
