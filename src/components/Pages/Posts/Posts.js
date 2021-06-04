import React from 'react';
import '/Users/larryh1981/project05/src/index.css';
import Post from './Post/Post';


function Posts() {
    return (
        <div className="container">
            <div className="row">
                <div class="col-md-2">
                    
                </div>
                <div class="col-md-10 text-center">

                    <>
                        <h1 className="text-center py-4"> Posts </h1>
                        <Post />
                    </>



                    
                </div>
            </div>           


        </div>
        
    );
};


export default Posts;