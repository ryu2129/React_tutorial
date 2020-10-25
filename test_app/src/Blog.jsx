// 親コンポーネント(Class Component)
// stateを持つ
// propsにはthisが必要
// renderメソッド内でjsxをreturnする

import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const authorName = "Yamada"
    return (
      <div>
        <Article title={"Reactの使い方"} />
        <Article title={"Jsxの使い方"} />
        <Article title={"環境構築をしてみよう"} />
      </div>
    )
  }
}

export default Blog;