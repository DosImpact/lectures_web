

# 정직하게 배워보는 Next js 시리즈

## 01

NextJS의 대표적인 기능  
- SSR 지원
- Code Splitting  
- 페이지 기반의 Client Side Rednering 제공
- 프리랜더 기능  
- SEO 최적화  

- 개발 환경에서 Fast Refresh 작동
- Express,Node 서버와 빠른 혼용

## 02

동적 라우팅  

- pages 폴더 자체가 동적 라우팅을 지원한다.  
- useRouter을 사용하여 react-router-dom 처럼 사용  
  
```jsx
- pages/user/[user].jsx
// http://localhost:3000/user/herry
// http://localhost:3000/user/herry?age=20

import { useRouter } from "next/router"; 
// query parameter 을 사용하기 위해 next의 router 패키지의 useRouter를 가져온다.

const User = () => {
  const router = useRouter();
  // router의 url 쿼리에 존재하는 user 의 값을 가져온다. 이는 [user].jsx의 user와 대응된다.
  const { user,age } = router.query;

  return <h3>사용자 이름: {user} 나이 : {age}</h3>;
};

export default User;
```

- Link를 통한 라우팅 이동

```js
import Link from "next/link";

const users = [
  { id: 1, name: "James" },
  { id: 2, name: "Martin" },
  { id: 3, name: "Danial" },
];

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        {users.map((user) => (
          <ul key={user.id}>
            <Link href={`/user/${encodeURIComponent(user.id)}`}>
              <a>{user.name}</a>
            </Link>
          </ul>
        ))}
      </li>
    </ul>
  );
}

export default Home;
```
## 03

Code Splitting  
- pages에 컴포넌트를 분리한것 자체가 코드 스플릿팅을 지원한다.  
- 필요한 페이지만 랜더링 하여 제공  

Prefetching  
- Link 컴포넌트는 사용자가 누를 수 있는 링크이다.  
- 따라서 pre-fetching (SSR 및 제공) 하는것이 기본 옵션이다.  


## 04



## Ref
[https://wonit.tistory.com/365?category=829651](https://wonit.tistory.com/365?category=829651)