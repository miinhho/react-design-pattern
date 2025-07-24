# Custom Hooks

React 16.8 부터 소개된 Hook 은, 함수형 컴포넌트의 상태와 생명주기에 접근할 수 있도록 해주는 함수다.

## 클래스 컴포넌트의 불편함

Hook 이 추가되기 전에는 상태와 생명주기 관련 메서드를 쓰려면 클래스 컴포넌트로 만들어야 했는데, 클래스 컴포넌트는 다음과 같은 단점이 있었다.

1. 로직을 추가할 수록 컴포넌트의 크기가 빠르게 증가한다.
2. 로직들이 서로 얽히고 분리하기 점점 어려워져 개발자의 가독성이 떨어진다.
3. 개발자가 파악하기 힘들어 디버깅과 성능 최적화도 힘들다.

## Hook 의 역할

### `useState`

`useState` 를 사용하여 함수형 컴포넌트 내에서 상태를 다룰 수 있다. 이 글을 읽고 있는 많은 이가 알듯이, 다음과 같이 사용할 수 있다.

```ts
const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </>
  )
}
```

### `useEffect`

클래스형 컴포넌트는 생명주기 메서드를 사용할 수 있었다. `useEffect` 를 사용하면 `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` 를 조합한 느낌의 효과를 낸다.

위의 예제에서 `useEffect` 를 다음과 같이 추가해서 사용해볼 수 있겠다.

```ts
useEffect(() => {
  console.log(`Count has changed: ${count}`)
}, [count])
```

## 커스텀 Hook 은 어떨까?

커스텀 Hook 을 사용했을 때의 장점은 다음과 같다.

1. 상태 로직이 필요할 때 컴포넌트와 분리해서 사용할 수 있다. 
2. 컴포넌트와의 결합도가 낮아지며 코드를 간결하고 짧게 유지할 수 있다.
3. 코드의 모듈화를 높이고 테스트가 용이하다.

단점은 다음과 같다.

1. 올바르게 사용하기 위해 익숙하게 쓸 줄 알아야 한다.
2. 잘못 사용할 위험이 있다. (`useCallback`, `useMemo`...)