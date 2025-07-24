# Compound

Compound (컴파운드) 패턴은 상위 컴포넌트를 여러 하위 컴포넌트로 나누고, 이들 간의 상호작용을 관리하는 디자인 패턴이다.

이 패턴에서 컴포넌트들은 서로 상태를 공유하고 특정 로직을 함께 사용하며, 여러 컴포넌트가 협력하여 하나의 완전한 기능을 구현할 수 있게 해준다.

컴파운드 패턴의 주요 장점은 부모 컴포넌트를 작은 구성 요소들로 분리하여 유연성과 확장성을 높일 수 있다는 것이다.

이 패턴은 특히 재사용 가능한 컴포넌트 라이브러리를 구축할 때 매우 유용하다.

## `React.Children.map`

자식 컴포넌트들을 순회 처리 하는데에도 컴파운드 패턴을 사용할 수 있다.

`React.cloneElement` 를 사용하여 자식 컴포넌트를 복제하여 각각에게 메서드를 넘길 수도 있다.

```js
export const Flyout = (props) => {
  const [open, toggle] = useState(false)

  return (
    <div>
      {React.Children.map(props.children, (child) => 
        React.cloneElement(child, { open, toggle })
      )}
    </div>
  )
}
```

## 장점과 단점?

### 장점
- 사용하는 쪽에서 동작 구현에 필요한 상태가 드러나지 않아 걱정 없이 사용할 수 있다.
- 자식 컴포넌트들을 일일히 import 할 필요 없이 기능을 이용할 수 있다.

### 단점
- `React.Children.map` 을 사용할 때 쓰는 쪽에서 자식 컴포넌트를 약속된 형태로 넘겨야 하는 제약이 생긴다.

```js
import { FlyOut } from './FlyOut'

export default function FlyoutMenu() {
  return (
    <FlyOut>
      {/* div 로 인해 오류가 발생한다! */}
      <div>
        <FlyOut.Toggle />
        <FlyOut.List>
          <FlyOut.Item>Edit</FlyOut.Item>
          <FlyOut.Item>Delete</FlyOut.Item>
        </FlyOut.List>
      </div>
    </FlyOut>
  )
}
```

- element 를 복제하는 경우, 복제 대상 컴포넌트가 기존에 갖고 있는 prop 과 이름이 충돌될 수 있다. 이 경우 `React.cloneElement` 를 사용할 때 넘어간 값으로 해당 prop 이 덮어써진다.