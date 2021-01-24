import { createContext } from 'react';
import { useMediaQuery } from 'react-responsive';

export const MediaQueryContext = createContext();

const MediaQueryProvider = ({ children }) => {

    const isMobile = useMediaQuery({maxDeviceWidth: 600});
    const isTab = useMediaQuery({maxDeviceWidth: 800});
    const isTabLand = useMediaQuery({maxDeviceWidth: 1080});
    const isLaptop = useMediaQuery({maxDeviceWidth: 1200});
    const isDesktop = useMediaQuery({maxDeviceWidth: 1440});
    const isWide = useMediaQuery({maxDeviceWidth: 1920});
    const isUltrawide = useMediaQuery({maxDeviceWidth: 2560});

    return (
        <MediaQueryContext.Provider value={{
            isMobile,
            isTab,
            isTabLand,
            isLaptop,
            isDesktop,
            isWide,
            isUltrawide,
        }}>
            { children }
        </MediaQueryContext.Provider>
    )
};

export default MediaQueryProvider;
