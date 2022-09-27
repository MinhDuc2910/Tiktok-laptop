import { useEffect, useState } from 'react';

function useDebounce(value, dilay) {
    const [debonceValue, setDebonceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebonceValue(value), dilay);

        return () => clearTimeout(handler);
    }, [value]);

    return debonceValue;
}

export default useDebounce;
