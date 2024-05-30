import React from 'react';
import './style.css';

import LOVs from 'LOVs';
import { Link } from 'react-router-dom';

const HomePage = (): JSX.Element => {
    return (
        <div className='homePage'>
            <Link to='/privacy'>Privacy Policy</Link>
            <Link to='/terms-of-use'>Terms of Use</Link>
            <Link to='/delete-account'>How to delete your Finelines account</Link>

            <div className='contact'>
                <h3 className='contact-header'>Contact Information</h3>
                <div className='contact-row'>
                    <div>Email:</div>
                    <div>{LOVs.contactEmail}</div>
                </div>
                <div className='contact-row'>
                    <div>Contact Number:</div>
                    <div>{LOVs.phoneNumber}</div>
                </div>
                <div className='contact-row'>
                    <div>Address:</div>
                    <div>{LOVs.headquartersAddress}</div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;
