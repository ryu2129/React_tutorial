// 子コンポーネント(Functional Component)→シンプル
// アロー関数で記述
// stateを持たない
// propsを引数に受け取る
// jsxをreturnする

import React from 'react';

const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  )
};

export default Article;