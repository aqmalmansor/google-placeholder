import React from 'react';

const DeleteAccountScreen = (): JSX.Element => {
    return (
        <>
            <title>How to Delete Your Data</title>
            <h1>How to Delete Your Data</h1>
            <p>If you wish to delete your data, you can do so by following the steps below:</p>
            <h2>Automated Method</h2>
            <p>Click the link below to send an automated data deletion request:</p>
            <p><a href='mailto:finelines.dev@gmail.com?subject=Data%20deletion%20request'>Send Data Deletion Request</a></p>
            <h2>Manual Method</h2>
            <p>Follow these steps to delete your data manually:</p>
            <ul>
                <li>Step 1: Log in to your app.</li>
                <li>Step 2: Go To Settings.</li>
                <li>Step 3: Delete Account.</li>
            </ul>
        </>

    );
};

export default DeleteAccountScreen;
