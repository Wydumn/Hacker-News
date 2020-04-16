import React, { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import Loading from './Loading'
import { fetchMainPosts } from '../utils/api'
import PostsList from './PostsList'

function fetchReducer(state, action) {
    if (action.type === 'success') {
        return {
            posts: action.posts,
            loading: false,
            error: null
        }
    }
    if (action.type === 'failure') {
        return {
            ...state,
            error: action.message,
            loading: false
        }
    }
}

const initialState = { posts: null, error: null, loading: true }

export default function Posts({ type }) {
    const [state, dispatch] = useReducer(
        fetchReducer,
        initialState
    )
    let { posts, loading, error} = state

    useEffect(() => {
        fetchMainPosts(type)
        .then((posts) => dispatch({ type: 'success', posts }))
        .catch((message) => dispatch({ type: 'failure', message}))
    }, [type])

    if (loading === true) {
        return <Loading />
    }

    if (error) {
        return <p className='center-text error'>{error}</p>
    }

    return <PostsList posts={posts} />
}

Posts.propTypes = {
    type: PropTypes.oneOf(['top', 'new'])
}