**Bắt đầu:** Chia cấu trúc project thành các thư mục nhỏ: ‘**store, reducer, action**’ và trong mỗi thư mục nên có một fie index.js
**Cài đặt:** *npm i react-redux –save | npm i redux --save*

trong trường hợp này ta đã sử dụng context để đặt store là globle data cho toàn ứng dụng

```react
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

Và import Provider và store:

```react
import { Provider } from 'react-redux'
import store from './store/index'
```

**Trong thư mục store:** 

> store là một nơi để chứa toàn bộ state của ứng dụng. Nó nhận đầu vào  
> là một reducer. Reducer đưa state vào trong store để store quản lý

```react
import { createStore } from "redux";
import reducer from "../reduces";

export const store = createStore(reducer);
export default store;
```

Trong thư mục reducer: phần này có tác dụng nhận action và trả về state tương ứng với action đã khai báo (chỉ tạo ra bản sao của state chứ ko được sửa trực tiếp giá trị của state)

```react
export default function reducer(state = [], action) {
  return [
    ...state,
    {
      name: action.tech
    }
  ]
}
```

**Khai báo 1 action cơ bản:** action nên có 1 trường type để reducer nhận ra và xử lý state tương ứng với action

```react
export const addClick = tech => ({
  type: 'ADD_TODO',
  tech
})
```

**Bắt đầu sử dụng redux:**
Đây là button có tác dụng đưa value từ text box vào store để redux quản lý. 

> Connect là hàm có chức năng kết nối component với redux để value của
> text có thể truyền vào store và nhận state mới từ redux nếu có sự thay
> đổi từ store để render giá trị mới vào component

```react
import React, { Component } from 'react';
import { store } from '../store/index'
import { addClick } from '../action'
import { connect } from 'react-redux';

class Button extends Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  handleClick = () => {
    this.props.dispathButton(this.myRef.value)
  }

  render() {
    return (
      <div>
        <input ref={(input) => { this.myRef = input }}></input>
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}

const mapDispatchToProps = () => {
  return {
    dispathButton: (val) => { store.dispatch(addClick(val)) }
  }
}

export default connect(mapDispatchToProps)(Button);
```


Và ở Component khác ta sẽ nhận state mới khi mà store có sự thay đổi:

```react
import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {

  render() {
    const { item } = this.props
    if (typeof item === 'undefined') {
      return (<div></div>)
    } else {
      return (
        <div>
          {
            item.map(el => <li>{el.name}</li>)
          }
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    item: state
  }
}

export default connect(mapStateToProps)(List)
```

**Lưu ý:**

```react
export default connect(mapStateToProps, mapDispatchToProps)(Paging)
```

**<u>mapStateToProps</u>** và **mapDispatchToProps** phải đúng thứ tự
....