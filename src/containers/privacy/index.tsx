/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import LOVs from 'LOVs';

const PrivacyPolicyScreen = (): JSX.Element => {
    return (
        <div>
            <h1>
                Privacy Policy
            </h1>

            <h1>Finelines Dev App Privacy Policy</h1>

            <p>Welcome to Finelines Dev, your new gaming community! This privacy policy outlines how we collect, use, and disclose your information when you use our mobile app.</p>

            <h2>Information We Collect</h2>

            <p>To foster a thriving gaming community, we gather some information to keep things running smoothly:</p>

            <ul>
                <li>
                    <strong>Username (chosen by you):</strong>
                    {' '}
                    Your alias in the Finelines Dev.
                </li>
                <li>
                    <strong>Email address (optional):</strong>
                    {' '}
                    Used for account verification, password resets, and non-promotional announcements (like important service updates).
                </li>
                <li>
                    <strong>Device information:</strong>
                    Operating system, device model (helps us troubleshoot issues and optimize the app for different devices).
                </li>
                <li>
                    <strong>Gaming preferences (optional):</strong>
                    Genres you enjoy, platforms you play on (helps us personalize your experience and connect you with like-minded gamers).
                </li>
                <li>
                    <strong>Content you post:</strong>
                    Forum discussions, comments, messages (all part of building the community!). Remember, this information is publicly viewable by default.
                </li>
            </ul>

            <h2>Use of Information</h2>

            <p>We use your information to:</p>

            <ul>
                <li>Provide and maintain the Finelines Dev platform.</li>
                <li>Verify your account and prevent spam or malicious activity.</li>
                <li>Personalize your experience with content recommendations and relevant discussions.</li>
                <li>Analyze usage trends to improve the app and cater to the gaming community's needs.</li>
                <li>Send you non-promotional emails related to your account or important service updates (if you provide your email).</li>
            </ul>

            <h2>Data Storage and Security</h2>

            <p>We take your privacy seriously and implement industry-standard security measures to safeguard your information against unauthorized access, disclosure, alteration, or destruction. However, as with any online service, complete security cannot be guaranteed.</p>

            <h2>Public Nature of Content</h2>

            <p>Please remember that your username and any content you post on the forum are public by default. This fosters open discussions but choose what you share wisely.</p>

            <h2>Third-Party Services</h2>

            <p>We may integrate certain third-party services like analytics tools or social media login options. These services may collect their own data in accordance with their privacy policies. We recommend reviewing those policies before using such features.</p>

            <h2>Your Rights</h2>

            <p>
                You have the right to access, correct, or delete your personal information. You can also request to deactivate your account. Please contact us at
                {LOVs.contactEmail}
                {' '}
                for any inquiries.
            </p>

            <h2>Changes to this Policy</h2>

            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>

            <h2>Contact Us</h2>

            <p>
                If you have any questions about this privacy policy, please contact us at
                {LOVs.contactEmail}
                {' '}
                or
                {LOVs.phoneNumber}
                .
            </p>

            <h2>Transparency and Openness</h2>

            <p>As a gaming community, transparency is key. We strive to be upfront about how your data is used. Here are some additional points to consider:</p>

            <ul>
                <li>
                    <strong>Data Retention:</strong>
                    {' '}
                    We will retain your information for as long as your account is active. You can request data deletion upon account deactivation, but some anonymized data may be retained for analytics purposes.
                </li>
                <li>
                    <strong>Children's Privacy:</strong>
                    {' '}
                    We do not knowingly collect information from children under the age of 13. If you are a parent or guardian and believe your child has provided us with information, please contact us and we will take steps to remove it.
                </li>
                <li>
                    <strong>International Users:</strong>
                    {' '}
                    If you are located outside
                    {' '}
                    {LOVs.country}
                    , your information may be transferred to and processed in
                    {' '}
                    {LOVs.country}
                    . These countries may have different data protection laws than your home country.
                </li>
            </ul>

            <p>Let's Keep Gaming Secure!</p>
            <p>We are committed to providing a safe and secure environment for gamers to connect and discuss their passion. By understanding how we handle your information, you can feel confident being part of the Finelines Dev community. </p>

        </div>
    );
};

export default PrivacyPolicyScreen;
