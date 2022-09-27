import { FakeApi } from './fake-data';
const GetAll = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(FakeApi);
        }, 200);
    });
};

export default { GetAll };
