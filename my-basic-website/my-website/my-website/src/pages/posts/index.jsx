import { useState, useEffect } from 'react'
import Post from '../../components/post'
import { smoothScrollToTarget } from '../../scrolling';

const postsURL = 'https://jsonplaceholder.typicode.com/posts/?userId=1'

function Posts() {
    smoothScrollToTarget();
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [search, setSearch] = useState('')

    const [error, setError] = useState('')
    const getPosts = async () => {
        try {
            const response = await fetch(postsURL)
            const newPosts = await response.json()

            setPosts(newPosts.slice(0, 5));
            setFilteredPosts(newPosts)
        } catch (err) {
            console.log(err)
            setError("Couldn't fetch posts")
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {

        const matchingPosts = posts.filter(post => {
            return post.title.toLowerCase().includes(search.toLowerCase()) || search === ''
        })
        setFilteredPosts(matchingPosts)

    }, [search])
    return (
        <main>
            <div className="posts" style={{ paddingTop: '100px' }}>
                <h1>
                    Posts from the <a href='https://jsonplaceholder.typicode.com/' style={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'inherit' }}>JSONPlaceholder API</a>
                </h1>

                <form style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <p>Search posts by title</p>
                    <input value={search} onChange={e => setSearch(e.target.value)} />
                </form>
                {error != '' && <h1>{error}</h1>}
                {filteredPosts.map((post, idx) => <Post post={post} key={idx} />)}
            </div>
        </main>
    )
}

export default Posts