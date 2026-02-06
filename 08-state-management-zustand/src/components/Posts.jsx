import React, { useEffect } from 'react'
import { usePostStore } from '../store/postStore'

/**
 * Posts Component - Demonstrates Async State Management with Zustand
 * 
 * This component showcases how Zustand handles:
 * - Async data fetching
 * - Loading states
 * - Error handling
 * - Displaying fetched data
 */
const Posts = () => {
    const { posts, loading, error, fetchPosts } = usePostStore()

    useEffect(() => {
        fetchPosts()
    }, [fetchPosts])

    if (loading) {
        return <div className="posts-loading">Loading posts...</div>
    }

    if (error) {
        return <div className="posts-error">Error: {error}</div>
    }

    return (
        <div className="posts">
            <h2>Posts</h2>
            {posts.length === 0 ? (
                <p>No posts available</p>
            ) : (
                <ul className="posts-list">
                    {posts.map((post) => (
                        <li key={post.id} className="post-item">
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Posts