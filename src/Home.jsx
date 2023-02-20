import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFeatch from './UseFetch';

function Home() {
    const { data: blogs, isPending, error } = useFeatch(' http://localhost:8000/blogs');
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}
export default Home;