import ChildComponent from "./childComponent";

const ParentComponent = () => {
  //ChildComponent로 message를 전달
  return (
    <ChildComponent message = "Hello from Parent"/>
  )
}

export default ParentComponent