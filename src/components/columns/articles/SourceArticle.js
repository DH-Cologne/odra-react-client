import React, {Component} from 'react';
import Radium from "radium";
import CommentButton from "../buttons/CommentButton";
import FlagButton from "../buttons/FlagButton";
import StarButton from "../buttons/StarButton";
import ThreeDotsButton from "../buttons/ThreeDotsButton";

class Article extends Component {
    render() {
        const {headline, crawlDate,  link, topic } = this.props.article;

        return (
            <div>
                <p>{topic}</p>
                <h4 style={{ fontSize: "0.9rem"}}><a href={link}>{headline}</a></h4>

                <span>{new Date(crawlDate).toLocaleString()}</span>
                <p style={{color:"#b4b4b4"}}>
                    <CommentButton comments={Math.round((Math.random()+1) * 2)}/>
                    <FlagButton flags={Math.round((Math.random()+1) * 2)}/>
                    <StarButton stars={Math.round((Math.random()+1) * 2)}/>
                    <ThreeDotsButton/>
                </p>
                <hr/>
            </div>
        );
    }
}

Article = Radium(Article)


export default Article;