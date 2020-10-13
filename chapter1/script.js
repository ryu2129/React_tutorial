let dom = document.querySelector('#root'); //querySelectorというメソッドを使ってid="root"のオブジェクトを取り出している。
let element = React.createElement(
  'p', {}, 'Hello React application!'
);                                        //react特有の仮装DOMメソッドにてエレメントを作って組み込む
ReactDOM.render(element, dom);            //上記にて作成した仮装DOMエレメントをレンダリングにより表示する。