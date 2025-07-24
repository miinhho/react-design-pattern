# Reducer를 사용한 상태 관리

컴포넌트 안의 정리되지 않은 상태들을 다루다보면, 부담스러워지거나 버거워질 때가 있습니다. 이때 reducer 패턴을 사용해 특정한 action에 상태를 관리할 수 있습니다.

이 패턴은 컴포넌트의 상태를 관리하려는 개발자에게 이벤트에 따라 상태 변화를 관리할 수 있도록 해줍니다.

## `useReducer`

React의 `useReducer` Hook은 복잡한 상태 로직을 관리하기 위한 useState의 대안입니다. action 객체를 dispatch 하여 상태를 업데이트합니다.

### Reducer 함수

Reducer 함수는 현재 상태와 action을 받아 새로운 상태를 반환하는 순수 함수입니다. 상태 변화 로직을 예측 가능하고 테스트하기 쉽게 만듭니다.

```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}
```

### Action 객체

Action은 상태 변화를 설명하는 객체입니다. 일반적으로 `type` 필드를 가지며, 필요에 따라 추가 데이터를 포함할 수 있습니다.

## 언제 사용해야 할까?

1. 여러 개의 관련된 상태값들이 함께 변경되는 경우
2. 상태 업데이트 로직이 복잡한 경우
3. 다음 상태가 이전 상태에 의존하는 경우
4. 상태 변화 로직을 컴포넌트에서 분리하고 싶은 경우

## 장점과 단점

### 장점

1. 모든 상태 변화가 reducer 함수를 통해 일어나므로 상태 변화를 예측하기 쉽습니다.
2. Reducer 함수는 순수 함수이므로 유닛 테스트가 간단합니다.
3. 상태 변화를 추적하고 디버깅하기 쉽습니다.
4. 상태 관리 로직을 컴포넌트에서 분리할 수 있습니다.
5. Reducer 함수는 여러 컴포넌트에서 재사용할 수 있습니다.

### 단점

1. 간단한 상태에는 오버엔지니어링일 수 있습니다.
2. Action 타입과 reducer 함수 작성으로 코드가 길어질 수 있습니다.
3. useState보다 복잡한 개념이므로 초기 학습이 필요합니다.

## useState vs useReducer

- **useState**: 간단한 상태 값 하나를 관리할 때
- **useReducer**: 복잡한 상태 로직이나 여러 상태값을 함께 관리할 때