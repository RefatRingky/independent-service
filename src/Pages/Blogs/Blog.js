import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h2>This is Blog</h2>
            <h3>Question Answer For Bonus Part</h3>
            <div className='first-question'>
            <h4>Question-1:Difference between  authentication and authorization.</h4>
            <p>
               <div>
               <strong>Answer:</strong>
               <strong>Authentication:</strong>
               <p> 1.Authentication indicate who is the user.</p>
               <p>2. Authentication is the first step to identifying a smart software system.</p>
                <p>3. Authentication is visible and also visible by user.</p>
               </div>

                <div>
               <strong> Authorization:</strong>
                <p>1.Authorization determine the resources the user can identify.</p>
                <p>2. Authorization take places after Authentication.</p>
                <p>3. Authorization is not visible and also user can not change it.</p>
                </div>
            </p>
            </div>

            <div className='second-question'>
              <h4>2. Why we are  using firebase? What other options do we have to implement authentication?</h4>
              <p>
                  <div>
                       <p> 1.Firebase is used many purpose that can help our apps to develop,grow and a quality app.</p>
                        <p> 2.Used to store  users data  like chat meassages,users details and other metadata.</p>
                        <p>3.Used to send notification.</p>

                  </div>
                  <div>
                    What other options do we have to implement authentication:
                    
                    <p>Password Requirements</p> 
                    <p>Transferring the Data</p> 
                    <p>Hashing Passwords etc</p>

                  </div>
              </p>
            </div>
            <div className='second-question'>
                <h4>  3. What other services does firebase provide other than authentication?  </h4>
                <p>
                   <p>1.Cloud Firestore.</p>
                   <p>Parse:Open source backend platform</p>
                   <p>Bcak4app:Parse hosting plateform</p>
                   <p>Kinvey:Mobile Backend as a service</p>
                   <p>Backendless:Mobile backend ans API services platform</p>
                   <p>Pubnub:Real-time API and global meassages</p>
                   <p>Kumulos:App performance management</p>
                         

                </p>
            </div>
        </div>
    );
};

export default Blog;