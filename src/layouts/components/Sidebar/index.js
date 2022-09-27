import classNames from 'classnames/bind';
import {
    FollowingActiveIcon,
    FollowingIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
} from '~/components/Icons';
import Account from '~/components/SuggestedAccounts/Account';
import config from '~/config';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar({ className }) {
    return (
        <aside className={className || cx('wrapper')}>
            {
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<FollowingIcon />}
                        activeIcon={<FollowingActiveIcon />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    />
                </Menu>
            }
            <Account label="Suggested accounts" see="See all" />
            <Account label="Following accounts" see="See less" />
        </aside>
    );
}
export default Sidebar;
