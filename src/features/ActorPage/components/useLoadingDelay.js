import { useState, useEffect } from 'react';

export const useLoadingDelay = (delay = 500) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loaderTimeoutId = setTimeout(() => {
            setIsLoading(false);
        }, delay);

        return () => clearTimeout(loaderTimeoutId);
    }, [delay]);

    return isLoading;
};