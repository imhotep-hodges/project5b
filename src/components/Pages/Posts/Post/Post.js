import React from 'react';
import { getPosts } from './actions/postAction.js';

function Post() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="row">
                <div class="col-md-2">
                    
                </div>
                <div class="col-md-10 text-center">
                    <h1 className="text-center py-4"> Post </h1>



                    
                </div>
            </div>           


        </div>
        
    );
};



export default Post;