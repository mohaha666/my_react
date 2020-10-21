import React, { Component } from 'react'
import axios from 'axios'

/**
 * 获取star最多的github仓库信息
 */
export default class MostStarRepo extends Component {

    state = {
        repoName : "",
        repoUrl : ""
    }


    componentDidMount(){
        // 使用axis发送ajax请求
        const url = `https://api.github.com/search/repositories?q=r&sort=stars&order=desc`
        axios.get(url)
        .then(response => {
            const result = response.data
            console.log(response)
            const {name, html_url} = result.items[0]
            this.setState({repoName: name, repoUrl: html_url})
        })
        .catch((error) => {
            alert(error.message)
        })


        // 使用fetch发送异步的ajax请求
        // fetch(url).then(response => {
        //     return response.json()
        // }).then(data => {
        //     const {name, html_url} = data.items[0]
        //     this.setState({repoName: name, repoUrl: html_url})
        // })
    }

    render() {
        const {repoName, repoUrl} = this.state
        if(repoName){
            return <h2>Most star repo is <a href={repoUrl}>{repoName}</a></h2>
        }else{
            return <h2>loading ...</h2>
        }
    }
}
