import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class CommentAdd extends Component {
    state = {
        name: "",
        content: ""
    }

    static propTypes = {
        addComment: PropTypes.func.isRequired
    }

    handleSubmit = () => {
        // 收集数据
        const {name} = this.state
        const {content} = this.state
        // 更新状态
        this.props.addComment(name, content)
        // 清除输入
        this.setState({name:"", content:""})
    }


    handleNameChange = (event) => {
        const name = event.target.value
        this.setState({name})
    }

    handleContentChange = (event) => {
        const content = event.target.value
        this.setState({content})
    }

    render() {
        const {name} = this.state
        const {content} = this.state
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" value={name}
                        onChange={this.handleNameChange}></input>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" placeholder="评论内容" rows="6" value={content}
                       onChange={this.handleContentChange} ></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-primary float-right" onClick={this.handleSubmit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
