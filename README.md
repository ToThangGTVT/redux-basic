**Bắt đầu: Chia cấu trúc project thành các thư mục nhỏ: &#39;store, reducer, store&#39; và trong mỗi thư mục nên có một fie index.js**

**Cài đặt:** npm i react-redux –save | npm i redux --save

ReactDOM.render(

  \&lt;Provider store={store}\&gt;

    \&lt;App /\&gt;

  \&lt;/Provider\&gt;,

  document.getElementById(&#39;root&#39;)

);

Và import Provider và store:

import { Provider } from &#39;react-redux&#39;

import store from &#39;./store/index&#39;

**Trong thư mục store:** store là một nơi để chứa toàn bộ state của ứng dụng. Nó nhận đầu vào là một reducer. Reducer đưa state vào trong store để store quản lý

import { createStore } from &quot;redux&quot;;

import reducer from &quot;../reduces&quot;;

export const store = createStore(reducer);

export default store;

**Trong thư mục reducer:** phần này có tác dụng nhận action và trả về state tương ứng với action đã khai báo (chỉ tạo ra bản sao của state chứ ko được sửa trực tiếp giá trị của state)

export default function reducer(state = [], action) {

  return [

    ...state,

    {

      name: action.tech

    }

  ]

}

**Khai báo 1 action cơ bản:** action nên có 1 trường type để reducer nhận ra và xử lý state tương ứng với action

export const addClick = tech =\&gt; ({

  type: &#39;ADD\_TODO&#39;,

  tech

})

**Bắt đầu sử dụng redux:**

Đây là button có tác dụng đưa value từ text box vào store để redux quản lý. _Connect là hàm có chức năng kết nối component với redux để value của text có thể truyền vào store và nhận state mới từ redux nếu có sự thay đổi từ store để render giá trị mới vào component_

import React, { Component } from &#39;react&#39;;

import { store } from &#39;../store/index&#39;

import { addClick } from &#39;../action&#39;

import { connect } from &#39;react-redux&#39;;

class Button extends Component {

  constructor(props) {

    super(props)

    this.myRef = React.createRef()

  }

  handleClick = () =\&gt; {

    this.props.dispathButton(this.myRef.value)

  }

  render() {

    return (

      \&lt;div\&gt;

        \&lt;input ref={(input) =\&gt; { this.myRef = input }}\&gt;\&lt;/input\&gt;

        \&lt;button onClick={this.handleClick}\&gt;Add\&lt;/button\&gt;

      \&lt;/div\&gt;

    )

  }

}

const mapDispatchToProps = () =\&gt; {

  return {

    dispathButton: (val) =\&gt; { store.dispatch(addClick(val)) }

  }

}

export default connect(mapDispatchToProps)(Button);

Và ở Component khác ta sẽ nhận state mới khi mà store có sự thay đổi:

import React, { Component } from &#39;react&#39;;

import { connect } from &#39;react-redux&#39;;

class List extends Component {

  render() {

    const { item } = this.props

    if (typeof item === &#39;undefined&#39;) {

      return (\&lt;div\&gt;\&lt;/div\&gt;)

    } else {

      return (

        \&lt;div\&gt;

          {

            item.map(el =\&gt; \&lt;li\&gt;{el.name}\&lt;/li\&gt;)

          }

        \&lt;/div\&gt;

      )

    }

  }

}

const mapStateToProps = (state) =\&gt; {

  return {

    item: state

  }

}

export default connect(mapStateToProps)(List)
