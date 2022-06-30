# 5

## as const 단언

### 1 객체 as const

- 객체 -> const

```js
const scores = { R: -1, S: 0, P: 1 };
//-> typing이 number로 된다.
const scores = { R: -1, S: 0, P: 1 } as const;
//-> typeing이 readonly + literal 로 변경됨
```

### 2 typeof {} as const , keyof typeof {} as const

- keyof + typeof 이용
- 객체 -> const 후, key만 유니온 type 으로 가져오고 싶다.
- 객체 -> const 후, value만 유니온 type 으로 가져오고 싶다.

```js
const scores = { R: -1, S: 0, P: 1 } as const;
type keysOfScores = keyof typeof scores // R|S|P
type valuesOfScores = keyof scores[keyof typeof scores] // -1|0|0
```

### 3. !단언

- !단언으로 mapping에 있어 null 제거하기

```js
const computerChoice = (imgCoords: ImgCoords) => {
    return (Object.keys(rspCoords) as ['바위', '가위', '보']).find((k) => {
        return rspCoords[k] === imgCoords;
    })!
}
```

### 4.

- FunctionComponent
- 별명 : FC
- 버려진 멸병 : SFC, StatelessComponent ( useState 훅때문에 더이상 stateless하지 않다.)

### 5. cf) (onClick + useRef<setTimeout()> vs useEffect + useRef<setInterval()> )

- useRef로 timer관련 함수를 다룰 수 있다.
- 클릭시 timer컨트롤 하는것이 반응체크 게임의 예제였다.(onClick시 clear/setTimeout)
- 랜더링(혹은 특정변수변경)시 timer 컨트롤 하는것이 RSP 게임 ( 시작시,useEffect 사용하여 setInterval )
