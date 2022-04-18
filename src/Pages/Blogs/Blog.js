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
                1.Authentication indicate who is the user.
                2. Authentication is the first step to identifying a smart software system.
                3. Authentication is visible and also visible by user.
               </div>

                <div>
               <strong> Authorization:</strong>
                1.Authorization determine the resources the user can identify.
                2. Authorization take places after Authentication.
                3. Authorization is not visible and also user can not change it.
                </div>
            </p>
            </div>

            <div className='second-question'>
              <h4>2. Why we are  using firebase? What other options do we have to implement authentication?</h4>
              <p>
                  <div>
                        1.Firebase is used many purpose that can help our apps to develop,grow and a quality app.
                        2.Used to store  users data  like chat meassages,users details and other metadata.
                        3.Used to send notification.

                  </div>
                  <div>
                    What other options do we have to implement authentication:
                    1.web-config.
                    2.parse.

                  </div>
              </p>
            </div>
            <div className='second-question'>
                <h4>  3. What other services does firebase provide other than authentication?  </h4>
                <p>
                    1.Cloud Firestore.
                    2. Cloud Function.
                    3.Hosting.
                    4.Cloud Storage.
                    5.Cloud Meassaging.       

                </p>
            </div>
        </div>
    );
};

export default Blog;