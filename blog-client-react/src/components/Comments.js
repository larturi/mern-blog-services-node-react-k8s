/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';

const Comments = ({ comments }) => {

    const renderedComments = Object.values(comments).map(comment => {

        if (comment.status === 'approved') {
            return (
                <div key={comment.id} className="alert alert-primary" role="alert">
                  {comment.content}
                </div>
            )
        }

        if (comment.status === 'pending') {
            return (
                <div key={comment.id} className="alert alert-dark" role="alert">
                  This comment is awaiting for moderation
                </div>
            )
        }

        if (comment.status === 'rejected') {
            return (
                <div key={comment.id} className="alert alert-danger" role="alert">
                    This comment has been rejected
                </div>
            )
        }

        return (
            <div key={comment.id} className="alert alert-primary" role="alert">
              {comment.content}
            </div>
        )
    })

   return (
      <div className='mt-2 border-1'>
         { renderedComments }
      </div>
   );
};

export default Comments;
