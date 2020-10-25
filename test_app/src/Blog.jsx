// 親コンポーネント(Class Component)
// stateを持つ
// propsにはthisが必要
// renderメソッド内でjsxをreturnする

import React from 'react';
import Article from './Article';
// import {Foo, Bar} from './components/FooBar.jsx' 名前付きなので二つできる
import * as FooBar from './components/FooBar'; //モジュール全体をimport（別名として）
import Hoge from './components/Hoge'; //モジュール全体をimport

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0
    }
  }

  // ボタンがクリックされたらいいねをカウントアップする
  componentDidMount() {
    document.getElementById('counter').addEventListener('click', this.countUp)
  }

  // いいね数が10以上になったら0になる
  componentDidUpdate() {
    if (this.state.count >= 10 ) {
      this.setState( {count:0})
    }
  }

  componentWillUnmount() {
    document.getElementById('counter').removeEventListener('click', this.countUp)
  }

  // 公開状況を反転させる関数
  // render内で値を変更してはいけない
  // setState()で変更する （stateが変更されるとrenderが走るため無限ループしてしまう）
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    })
  };

  render() {
    return (
      <>
        <Article
          title={"Reactの使い方"}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          count={this.state.count}
        />
        <FooBar.Foo />
        <FooBar.Bar />
        <Hoge />
      </>
    )
  }
}

export default Blog;