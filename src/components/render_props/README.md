# Render Props

Render Props는 prop 으로 전달받은 함수를 사용해 무엇을 렌더링할지 결정하는 패턴입니다. React 에서 컴포넌트 간 로직을 공유하는 방법 중 하나로, **합성** 을 통해 재사용성을 높이는 기법입니다.

Render Props 패턴은 컴포넌트의 상태 관리와 비즈니스 로직을 캡슐화하고, 렌더링은 children 함수(또는 render prop) 에 위임하여 동일한 로직을 다양한 UI로 재사용할 수 있게 해줍니다. 하지만 Render Props 로 처리할 수 있는 부분은 대부분 Hook 으로 대체가 가능하며, Hook 이 더 나은 개발자 경험을 제공하고 코드 재사용과 테스트를 하기 쉬울 때가 많습니다.

Render Props 패턴을 사용하면 아래와 같이 컴포넌트의 구조가 복잡해지는 경향이 있지만, Hook 을 사용한다면 함수형 컴포넌트 내에서 직접 로직을 사용할 수 있습니다.

```tsx
<DataFetcher url="/api/users">
  {({ data, loading, error }) => (
    <MouseTracker>
      {({ x, y }) => (
        <Counter>
          {({ count, increment }) => (
            <Component data={data} mousePos={{ x, y }} count={count} />
          )}
        </Counter>
      )}
    </MouseTracker>
  )}
</DataFetcher>
```

## Render Props의 사용 사례

- 동일한 로직을 다양한 UI 로 렌더링해야 하는 경우
- 런타임에 렌더링 방식을 결정해야 하는 경우
- 컴포넌트의 렌더링을 완전히 커스터마이징할 수 있어야 하는 경우

## Hook의 사용 사례

- 상태 로직만 재사용하고 렌더링은 각 컴포넌트에서 직접 처리하는 경우
- 로직이 여러 값을 반환하고 이를 개별적으로 사용해야 하는 경우
- 컴포넌트 내에서 조건부로 로직을 적용해야 하는 경우

## 장점과 단점은?

### 장점

- 한 곳에 구현한 로직들을 여러 컴포넌트에서 재사용할 수 있습니다.
- 렌더링 방식을 완전히 제어할 수 있어 높은 유연성을 제공합니다.
- 로직을 한 곳에서 관리하여 관심사의 분리도 적용할 수 있습니다.

### 단점

- 함수형 children 으로 인해 JSX 구조가 복잡해질 수 있습니다.
- 중첩된 render props 로 인해 "callback hell" 과 유사한 문제가 발생할 수 있습니다.
- TypeScript 에서 타입 정의가 복잡하고 디버깅이 어려워질 수 있습니다.
