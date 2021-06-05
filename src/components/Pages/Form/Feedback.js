import React, {useState} from 'react';
import '/Users/larryh1981/project05/src/index.css';
import FileBase from 'base-64';
import { useDispatch } from 'react-redux';
import e from 'express';
import { createPost } from '/Users/larryh1981/project05/src/actions/postAction';

const Feedback = () => {
    const [postData, setPostData] = useState({
            creator: '',        
            message: '',
            selectedFile: ''

    });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    
                </div>
                <div className="col-md-10 text-center">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='creator' value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={postData.creator} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></textarea>
                    </div>
                    <div className="mb-3">
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                        />    
                        <button type="button" className="btn btn-primary btn-sm">Send</button>
                    </div>
                    
                </form>
                </div>



                    
                
            </div>           


        </div>
        
    );
};



export default Feedback;