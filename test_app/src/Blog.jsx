// 親コンポーネント(Class Component)
// stateを持つ
// propsにはthisが必要
// renderメソッド内でjsxをreturnする

import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false
    }
  }

  // 公開状況を反転させる関数
  // render内で値を変更してはいけない
  // setState()で変更する（stateが変更されるとrenderが走るため無限ループしてしまう）
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };

  render() {
    return (
      <>
        <Article title={"Reactの使い方"} isPublished={this.state.isPublished} toggle={() => this.togglePublished()} />
      </>
    )
  }
}

export default Blog;