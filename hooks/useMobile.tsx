import * as React from 'react';

export const useMobile = () => { 
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => { 
        const handleResize = () => { 
            if (window.innerWidth < 768) { 
                setIsMobile(true);
            } else { 
                setIsMobile(false);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => { 
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return isMobile;
}