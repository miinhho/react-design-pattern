# React Design Pattern

> React 를 어떻게 더 잘 쓸 수 있을까? 더 좋은 방법은 없을까?

## Chapter

1. [Container & Presentation](./src/components/container_presentation/README.md)

2. [Custom Hook](./src/components/custom_hooks/README.md)

3. [State Reducer](./src/components/state_reducer/README.md)

4. [Data Provider](./src/components/data_provider/README.md)

5. [HOC](./src/components/hoc/README.md)

6. [Render Props](./src/components/render_props/README.md)

7. [Compound](./src/components/compound/README.md)

<br>

<img src="https://github.com/miinhho/react-design-pattern/blob/main/public/page.png" width="1000" height="750"></img>

## 실행 방법

```bash
git clone https://github.com/miinhho/react-design-pattern.git
cd react-design-pattern
pnpm i
```

```bash
pnpm dev
```

## 참고자료

- https://refine.dev/blog/react-design-patterns/
- https://patterns-dev-kr.github.io/

<br>

> [!Note]
> `forwardRef` 를 통해 하위 컴포넌트의 DOM 에 접근하는 패턴은 React 19 에서 ref 를 prop 으로 전달이 가능해졌고, `forwardRef` 가 **deprecated 예정**이기 때문에 제외했습니다.
