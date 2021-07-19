import React, { Component } from 'react'

export default class search extends Component {
    render() {
        return (
            <div>
                <h2 className="title">电影搜索</h2>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="请输入电影名" aria-label="请输入电影名" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">搜索</button>
                </div>
            </div>
        )
    }
}
