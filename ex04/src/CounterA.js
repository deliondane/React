import React from 'react';
//부모 컴포턴트로 부터 value와 increase함수를 props로 전달받음
function CounterA({value, increase}){
  console.log("CounterA 호출됨")
  return (
    <div className='box'>
      <h1>CounterA</h1>
      {/*버튼을 누를때마다 value값을 1씩 증가 */}
      <button onClick={increase}>
        {value}
      </button>
    </div>
  )
}

//React.memo: 부모컴포넌트의 상태가 변경되었을때 자식컴포넌트가 리렌더링 되는 것을 막아줌
export default React.memo(CounterA);