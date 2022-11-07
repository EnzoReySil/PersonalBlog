import {useState} from "react";
import axios from "axios";

export default function CommentCreate({postId}) {
    const [content, setContent] = useState(""); // useState is a hook

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });
        setContent('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <div className="form-group"></div>
                    <label>New Comment</label>
                    <input value={content} onChange={event => setContent(event.target.value)} className="form-control"/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>);
}