import React, { useReducer, useEffect } from 'react'
import queryString from 'query-string'
import { fetchItem, fetchComments } from '../utils/api'
import Loading from './Loading'
import PostMetaInfo from './PostMetaInfo'
import Title from './Title'
import Comment from './Comment'

function fetchReducer(state, action) {
    if (action.type === 'post') {
        return {
            ...state,
            post: action.post,
            loadingPost: false
        }
    }
    if (action.type === 'comment') {
        return {
            ...state,
            comments: action.comments,
            loadingComments: false
        }
    }
    if (action.type === 'failure') {
        return {
            ...state,
            error: action.message,
            loadingPost: false,
            loadingComments: false
        }
    }
}

const initialState = {
    post: null,
    loadingPost: true,
    comments: null,
    loadingComments: true,
    error: null,
}


export default function Post({location}) {
    const { id } = queryString.parse(location.search)

    const [state, dispatch] = useReducer(
        fetchReducer,
        initialState
    )

    useEffect(() => {
        fetchItem(id)
        .then((post) => {
            dispatch({ type: 'post', post})
            console.log('post:', post, '\npost.kids:', post.kids)
            return fetchComments(post.kids || [])
        })
        .then((comments) => dispatch({ type: 'comment', comments}))
        .catch((message) => dispatch({ type: 'failure', message }))
    }, [id])
    

    const { post, loadingPost, comments, loadingComments, error } = state

    if (error ){
        return <p className='center-text error'>{error}</p>
    }

    return (
        <React.Fragment>
            {loadingPost === true
                ? <Loading text='Fetching post' />
                : <React.Fragment>
                    <h1 className='header'>
                        <Title url={post.url} title={post.title} id={post.id} />
                    </h1>
                    <PostMetaInfo
                        by={post.by}
                        time={post.time}
                        id={post.id}
                        descendants={post.descendants}
                    />
                    <p dangerouslySetInnerHTML={{__html: post.text}}/>
                  </React.Fragment>
            }
            {loadingComments === true
                ? loadingPost === false && <Loading text='Fetching comments' />
                : <React.Fragment>
                    {comments.map((comment) => 
                        <Comment
                            key={comment.id}
                            comment={comment}
                        />
                    )}
                  </React.Fragment>}
        </React.Fragment>
    )
}