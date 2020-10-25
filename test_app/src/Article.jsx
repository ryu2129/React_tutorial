// 子コンポーネント(Functional Component)→シンプル
// アロー関数で記述
// stateを持たない
// propsを引数に受け取る
// jsxをreturnする

import React, {useState} from 'react';
import LikeButton from './LikeButton';

const Article = (props) => {
  // isPublished→初期値がfalseのもの togglePublished→isPublishedを変更するものとして宣言
  const [isPublished, togglePublished] = useState(true)
  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態:</label>
      <input type="checkbox" checked={isPublished} id="check" onClick={() => togglePublished(!isPublished)} />
      <LikeButton />
    </div>
  )
};

export default Article;