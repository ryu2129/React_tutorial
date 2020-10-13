let dom = document.querySelector('#root'); //querySelectorというメソッドを使ってid="root"のオブジェクトを取り出している。
let element = React.createElement(
  'div', {}, [
    React.createElement(
      'h2', {}, "Hello!"
    ),
    React.createElement(
      'h3', {}, "React sample page."
    ),
    React.createElement(
      'ul', {}, [
        React.createElement(
          'li', {}, "First item."
        ),
        React.createElement(
          'li', {}, "Second item."
        ),
        React.createElement(
          'li', {}, "third item."
        ),
      ]
    ),
  ]);
                                       //react特有の仮装DOMメソッドにてエレメントを作って組み込む
ReactDOM.render(element, dom);            //上記にて作成した仮装DOMエレメントをレンダリングにより表示する。