import { news } from "../../api.js/news.js"
import "./Cards.css"
export default function Cards() {
    return (
        <section className="cards">
            {news.map((item, index) => (
                <div className="card" key={index}>
                    <h1 className="usuarPost">{item.username}</h1>
                    <img src={item.image} alt="" />
                    <i></i><label>{item.likes}</label>
                    <p>{item.description}</p>
                    <section className="comments">
                        {item.comments.map(comment => (
                            <div className="comment">
                                <div>
                                    <img src="" alt="" /><h1>{comment.user}</h1>
                                </div>
                                <p>{comment.comment}</p>
                            </div>
                        ))}
                    </section>
                </div>
            ))}
        </section>
    )
}