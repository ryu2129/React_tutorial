// 親コンポーネント(Class Component)
// stateを持つ
// propsにはthisが必要
// renderメソッド内でjsxをreturnする

import React from 'react';
import Article from './Article';
// import {Foo, Bar} from './components/FooBar.jsx' 名前付きなので二つできる
import * as FooBar from './components/FooBar'; //モジュール全体をimport（別名として）
import Hoge from './components/Hoge'; //モジュール全体をimport

const Blog = () => {
  // ボタンがクリックされたらいいねをカウントアップする
  // componentDidMount() {
  //   document.getElementById('counter').addEventListener('click', this.countUp)
  // }

  // // いいね数が10以上になったら0になる
  // componentDidUpdate() {
  //   if (this.state.count >= 10 ) {
  //     this.setState( {count:0})
  //   }
  // }

  // componentWillUnmount() {
  //   document.getElementById('counter').removeEventListener('click', this.countUp)
  // }

  // countUp = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // };


  return (
    <>
    <Article
      title={"Reactの使い方"}
        // count={this.state.count}
      />
      <FooBar.Foo />
      <FooBar.Bar />
      <Hoge />
    </>
  )
}

export default Blog;