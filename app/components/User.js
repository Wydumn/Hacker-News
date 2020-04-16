import React, { useEffect, useReducer } from 'react'
import queryString from 'query-string'
import Loading from './Loading'
import { formatDate } from '../utils/helpers'
import { fetchUser, fetchPosts } from '../utils/api'
import PostsList from './PostsList'

function fetchReducer(state, action) {
    if (action.type === 'user') {
        return {
            ...state,
            user: action.user,
            loadingUser: false
        }
    }
    if (action.type === 'posts') {
        return {
            ...state,
            posts: action.posts,
            loadingPosts: false,
            error: null
        }
    }
    if (action.type === 'failure') {
        return {
            ...state,
            loadingUser: false,
            loadingPosts: false,
            error: action.message
        }
    }
}

const initialState = {
    user: null,
    loadingUser: true,
    posts: null,
    loadingPosts: true,
    error: null,
}


export default function Post({location}) {
    const { id } = queryString.parse(location.search)

    const [state, dispatch] = useReducer(
        fetchReducer,
        initialState
    )

    const { user, posts, loadingUser, loadingPosts, error } = state

    useEffect(() => {
        fetchUser(id)
        .then((user) => {
            dispatch({ type: 'user', user })

            return fetchPosts(user.submitted.slice(0, 30))
        })
        .then((posts) => {
            dispatch({ type: 'posts', posts})
        })
        .catch(({message}) => {
            dispatch({ type: 'failure', message })
        })
    }, [id])

    if (error) {
        return <p className='center-text error'>{error}</p>
    }

    return (
        <React.Fragment>
            {loadingUser === true
                ? <Loading text='Fetching User' />
                : <React.Fragment>
                    <h1 className='header'>{user.id}</h1>
                    <div className='meta-info-light'>
                        <span>joined <b>{formatDate(user.created)}</b></span>
                        <span>has <b>{user.karma.toLocaleString()}</b> karma</span>
                    </div>
                    <p dangerouslySetInnerHTML={{__html: user.about}} />
                  </React.Fragment>}
            {loadingPosts === true
                ? loadingUser === false && <Loading text='Fetching posts' />
                : <React.Fragment>
                    <h2>Posts</h2>
                    <PostsList posts={posts} />
                  </React.Fragment>}
        </React.Fragment>
    )

}