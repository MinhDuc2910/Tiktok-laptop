// Layouts
import UploadOnly from '~/layouts/UploadOnly';
import LiveLayout from '~/layouts/LiveLayout';
import config from '~/config';
// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, layout: Profile },
    { path: config.routes.live, layout: LiveLayout },
    { path: config.routes.upload, component: Upload, layout: UploadOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
