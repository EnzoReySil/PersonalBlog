import {useState, useEffect} from "react";
import axios from "axios";

export default function CommentList({postId}) {
    const [comments, setComments] = useState([{content: "Loading..."}]);

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        setComments(response.data);
    }

    useEffect(() => {
        fetchData().then(r => console.log("Comments fetched"));
    }, []);

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    });

    return <ul>
        {renderedComments}
    </ul>
}