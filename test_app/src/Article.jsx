// 子コンポーネント(Functional Component)→シンプル
// アロー関数で記述
// stateを持たない
// propsを引数に受け取る
// jsxをreturnする

import React from 'react';
import LikeButton from './LikeButton';

const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態:</label>
      <input type="checkbox" checked={props.isPublished} id="check" onClick={() => props.toggle()} />
      <LikeButton count={props.count} />
    </div>
  )
};

export default Article;