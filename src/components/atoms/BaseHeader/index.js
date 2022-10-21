import React from 'react'
import './styles.scss';
import { isMobile } from 'helpers/Mobile';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';

const BaseHeader = () => {
    return <div className="base-header-container">
        {'Municipio>Organismo'}
        {isMobile &&
            <div className="base-header-title">
            </div>
        }
        {!isMobile &&
            <div className="base-header-title">
            </div>
        }
        <div className="base-header-counter">

        </div>
        {
            <div className="base-header-user">
                <div className="base-header-actions">
                    <div className="base-header-actions">
                        <div className='base-header-actions-magnifying glass'>
                            <SearchIcon></SearchIcon>
                        </div>
                        <div className="base-header-actions-notifications">
                            <NotificationsNoneIcon></NotificationsNoneIcon>
                        </div>
                        <div>
                            <HelpOutlineIcon></HelpOutlineIcon>
                        </div>
                        <div className="base-header-actions-logout">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#3843D0" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.75751 26.3018C4.24161 23.263 6.95457 20.6996 10.7169 19.4431C12.0925 20.8343 13.9297 21.7065 16.0268 21.7065C18.1102 21.7065 19.9372 20.8456 21.3099 19.4701C25.0526 20.7435 27.7401 23.3146 28.1976 26.3551C25.2628 29.8086 20.8873 31.9998 16.0001 31.9998C11.0878 31.9998 6.69252 29.7861 3.75751 26.3018ZM22.2401 12.9065C22.2401 15.4513 21.0662 17.6831 19.3029 18.9348C18.3518 19.6099 17.2292 19.9998 16.0268 19.9998C14.8472 19.9998 13.7444 19.6245 12.8049 18.9729C11.0115 17.7288 9.81343 15.4774 9.81343 12.9065C9.81343 8.98893 12.5952 5.81314 16.0268 5.81314C19.4583 5.81314 22.2401 8.98893 22.2401 12.9065Z" fill="#FBFEFF" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
}

export default BaseHeader;