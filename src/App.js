// 실질적 웹사이트 화면 출력
import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '010304',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '이화수',
  'birthday': '030103',
  'gender': '남자',
  'job': '백수'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '신지연',
  'birthday': '040407',
  'gender': '여자',
  'job': '디자이너'
}
]

class App extends Component {
  render() {
    return (
      // props(속성)
      // props를 이용해서 내용을 계층적으로, 구조화하여 웹 문서를 출력할 수 있다.
      // App.js 의 내용을 바꾸면 바로 적용된다.
      <div>
        {
          // 맵 함수를 이용한 소스코드 간결화
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                // map 함수에는 key값이 필요하다
                id={c.id}
                image={c.name}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />  
            )
          })
        }
      </div>
    );
  }
}

export default App;
