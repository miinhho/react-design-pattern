import Toggle from "./Toggle"

const ToggleButton = () => {
  return (
    <Toggle>
      <Toggle.On>버튼이 켜졌습니다</Toggle.On>
      <Toggle.Off>버튼이 꺼졌습니다</Toggle.Off>
      <Toggle.Button />
    </Toggle>
  )
}

export default ToggleButton