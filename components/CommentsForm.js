import React, { useState, useEffect, useRef } from 'react';

import { submitComment  } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, [])

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email){
      setError(true);
      return
    }

    const commentObj = { name, email, comment, slug };

    if(storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    } 
    
    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMessage(true);
        
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      })

  }

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Leave a reply</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea 
          ref={commentEl} 
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-100 bg-gray-100 text-gray-700' 
          placeholder='Comment'
          name='comment'
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input 
          type='text'
          ref={nameEl}
          className='px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-100 bg-gray-100 text-gray-700'
          placeholder='Name'
          name='name'
        />
        <input 
          type='text'
          ref={emailEl}
          className='px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-100 bg-gray-100 text-gray-700'
          placeholder='Email'
          name='email'
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input ref={storeDataEl} type="checkbox" id='storeData' name='storeData' value='true' />
          <label className="ml-2 text-gray-500 cursor-pointer" htmlFor="storeData">Save my e-mail and name for the next time I comment.</label>
        </div>
      </div>
      {error && <p className='text-xs text-red-500'>All fields are required</p>}
      <div className="mt-8">
        <button
          type='button'
          onClick={handleCommentSubmission}
          className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer'
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <div className="fixed z-50 left-0 bottom-0 flex justify-center w-full bounce-once">
            <div className="bg-green-500 mx-2 md:mx-0 mb-2 md:mb-16 w-full sm:w-max text-center text-white px-4 py-2 rounded-2xl">
              Comment submited for review
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommentsForm;
 
