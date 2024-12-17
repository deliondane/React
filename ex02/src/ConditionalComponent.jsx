const ConditionalComponent = ({isActive}) => {
  //props로 속성을 받으면 props.isActive로 작성하고
  //{isActive}로 받으면 그냥 isActive로 작성하면 됩니다

  //className변수에 isActive가 true면 active를 할당하고 false면 inactive를 할당
  const className = isActive ? 'active' : 'inactive';

  return (
    //클래스를 className값으로 설정
    <div className={className}>Status: {isActive ? 'active' : 'inactive'}</div>
  )
}

export default ConditionalComponent