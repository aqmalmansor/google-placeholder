import React from 'react';

const DeleteAccountScreen = (): JSX.Element => {
    return (
        <>
            <title>How to Delete Your Data</title>
            <h1>How to Delete Your Data</h1>
            <p>If you wish to delete your data, you can do so by following the steps below:</p>
            <h2>Automated Method</h2>
            <p>Click the link below to send an automated data deletion request:</p>
            <div style={{ gap: 3, display: 'flex ' }}>
                <button
                    type='button'
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'mailto:finelines.apple.dev2@gmail.com&subject=Delete Finelines Account';
                    }}
                >
                    Send Data Deletion Request
                </button>

                or you can email us at finelines.apple.dev2@gmail.com
            </div>
            <h2>Manual Method</h2>
            <p>Follow these steps to delete your data manually:</p>
            <ul>
                <li>Step 1: Log in to your app.</li>
                <li>Step 2: Go to Profile on the bottom tab</li>
                <li>Step 2: Go To Settings by pressing on the hamburger menu on the top left.</li>
                <li>Step 3: Press `Delete Account` button which is located at the bottom of the screen.</li>
            </ul>
        </>

    );
};

export default DeleteAccountScreen;
