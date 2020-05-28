import React, { Component } from 'react';
import { Input } from 'antd'
import store from '../store/index'
const { Search } = Input
class TodoList extends Component {
  state = {
    inputValue: 'state value',
    list: []
  }
  handleInputChnage(value) {
    // console.log(value)
    let newList = this.state.list.slice(0)
    newList.push(value)
    this.setState({
      inputValue: '',
      list: newList
    })
  }
  render() {
    console.log(store.getState())
    return (
      <>
        <div>
          {/* kankanlou */}
          <Search
            placeholder="input search text"
            enterButton="提交"
            size="large"
            onChange={value => this.handleInputChange()}
            onSearch={value => this.handleInputChnage(value)}
          />
        </div>
        <ul>
          {
            this.state.list.map((item, key) => {
              return (
                <li key={key}>{item}</li>
              )
            })
          }
        </ul>
      </>
    );
  }
}

export default TodoList;