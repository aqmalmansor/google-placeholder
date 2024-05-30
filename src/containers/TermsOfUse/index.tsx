/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import LOVs from 'LOVs';

const TermsOfUse = (): JSX.Element => {
    return (
        <>
            <h1>Finelines Dev App Terms of Use</h1>

            <p>These Terms of Use ("Terms") govern your access to and use of the Finelines Dev mobile application (the "App"). By accessing or using the App, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use the App.</p>

            <h2>1. User Accounts</h2>

            <p>1.1 You may be required to create an account to access certain features of the App. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
            <p>1.2 You agree to provide and maintain true, accurate, current, and complete information about yourself as prompted by the App's registration form.</p>
            <p>1.3 You may not create an account for anyone else or use someone else's account without their permission.</p>

            <h2>2. User Conduct</h2>

            <p>2.1 You agree to use the App in a lawful and respectful manner.</p>
            <p>2.2 You agree not to:</p>
            <ul>
                <li>Post any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, obscene, hateful, or racially or ethnically offensive.</li>
                <li>Post any content that infringes on the intellectual property rights of others.</li>
                <li>Post any spam, unsolicited commercial messages, or promotional content.</li>
                <li>Disrupt or interfere with the security of the App.</li>
                <li>Use the App to impersonate any person or entity.</li>
                <li>Attempt to gain unauthorized access to the App or any other user accounts.</li>
            </ul>

            <h2>3. Content Ownership</h2>

            <p>3.1 You retain all ownership rights to the content you post on the App ("User Content").</p>
            <p>3.2 By posting User Content, you grant Finelines Dev a non-exclusive, royalty-free, worldwide license to use, reproduce, modify, publish, and distribute your User Content in connection with the App and its services.</p>

            <h2>4. Moderation</h2>

            <p>4.1 Finelines Dev reserves the right to remove or modify any User Content that violates these Terms or that we deem inappropriate for any reason.</p>
            <p>4.2 We may also suspend or terminate your account for violations of these Terms.</p>

            <h2>5. Third-Party Links</h2>

            <p>5.1 The App may contain links to third-party websites or services. These links are not under our control, and we are not responsible for the content or practices of any third-party websites or services.</p>

            <h2>6. Disclaimers</h2>

            <p>6.1 THE APP IS PROVIDED "AS IS" AND WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
            <p>6.2 GAMERVESE DOES NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE APP IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>

            <h2>7. Limitation of Liability</h2>

            <p>7.1 GAMERVESE WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE APP, EVEN IF GAMERVESE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>

            <h2>8. Termination</h2>

            <p>8.1 We may terminate these Terms or your access to the App at any time for any reason.</p>

            <h2>9. Governing Law</h2>

            <p>
                9.1 These Terms shall be governed by and construed in accordance with the laws of
                {LOVs.country}
                , without regard to its conflict of law provisions.
            </p>

            <h2>10. Entire Agreement</h2>

            <p>10.1 These Terms constitute the entire agreement between you and Finelines Dev regarding your use of the App.</p>

            <h2>11. Updates to these Terms</h2>

            <p>
                11.1 We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on the App.
            </p>

            <h2>12. Contact Us</h2>
            <p>
                12.1 If you have any questions about these Terms, please contact us at
                {LOVs.contactEmail}
            </p>
        </>
    );
};

export default TermsOfUse;
