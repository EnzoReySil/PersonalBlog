import React, {useState} from "react";
import axios from "axios";

const PostCreate = () => {
    const [title, setTitle] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post("http://localhost:4000/posts", {
            title
        });
        setTitle("");
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" value={title}
                           onChange={event => setTitle(event.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default PostCreate;