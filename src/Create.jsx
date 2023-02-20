import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [auther, setAuther] = useState('');
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}

                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog auther:</label>
                <select
                    required
                    value={auther}
                    onChange={(e) => setAuther(e.target.value)}
                >
                    <option value="Abhi">Abhi</option>
                    <option value="Rohit">Rohit</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}
export default Create;