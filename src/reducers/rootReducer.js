const initState = {
  posts: [
    {
      id: '1',
      title: 'Titans making progress',
      body: 'It has been a slow and steady progress so far',
    },
    {
      id: '2',
      title: 'Titans making progress',
      body: 'It has been a slow and steady progress so far',
    },
    {
      id: '3',
      title: 'Titans making progress',
      body: 'It has been a slow and steady progress so far',
    },
    {
      id: '4',
      title: 'Titans making progress',
      body: 'It has been a slow and steady progress so far',
    },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPost = state.posts.filter((post) => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPost,
    };
  }
  return state;
};

export default rootReducer;
