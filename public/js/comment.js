const commentFormHandler =  async (event) => {
    event.preventDefault();
  
  // New comment object creation. The user_id is pulled in the controller component, these variables can be pulled at this stage
    const body = document.querySelector('#comment-body').value;
    const story_route = window.location.pathname.lastIndexOf('/');
    const story_id = parseInt(window.location.pathname.substring(story_route + 1));
  
    // if body is given, post this new comment usinf a FETCH request to the backend
    if (body) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ body, story_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(window.location.pathname);
      } else {
        alert('Failed to leave comment');
      }
    };
  };
  
  document
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);
  
  