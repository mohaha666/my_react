import React, { Component } from 'react'

import CommentAdd from "../comment-add/comment-add"
import CommentList from "../comment-list/comment-list"

export default class App extends Component {
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         comments : [
    //             {name: "jack", content:"不错！"},
    //             {name: "mickey", content:"不好！"},
    //         ]
    //     }
    // }

    //给组件对象指定state属性
    state = {
        comments : [
            {name: "jack", content:"不错！"},
            {name: "mickey", content:"不好！"},
        ]
    }

    addComment = (name, content) => {
        const {comments} = this.state
        comments.unshift({name: name, content: content})
        this.setState({comments})
    }

    deleteComment = (index) => {
        const {comments} = this.state
        comments.splice(index, 1)
        this.setState({comments})
    }

    render() {
        const {comments} = this.state

        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                         <div className="row">
                             <div className="col-xs-12">
                                 <h1>请发表评论</h1>
                             </div>
                         </div>
                    </div>
                </header>
                <div className="container">
                    <div className="row">
                        <CommentAdd addComment={this.addComment}/>
                        <CommentList comments={comments} deleteComment={this.deleteComment}/>
                    </div>
                </div>
            </div>
        )
    }
}
