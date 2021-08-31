### 핵심 컨셉

✅ pages/ 폴더 자체가 라우팅 기능을 제공

- pathname 변수 주는 방법
- public 폴더 또한 요청하면 static 파일을 제공한다.

✅ Head 컴포넌트를 이용한 header 태그 수정

✅ Link 태그를 이용한 라우팅

- 목적 : 링크에 들어간 컴포넌트는 CSR 제공
- route url에서 첫 pages는 프리랜더를 제공

```js
import Head from "next/head"; // Head - (react-helmet)
import Link from "next/link"; // Link - (react-router-dom)

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta keyword="My blog"></meta>
        <meta content="My blog"></meta>
      </Head>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/photos">photos</Link>
        </li>
      </ul>
      <h2>Welcome</h2>
    </div>
  );
}
```

✅ **\_app.js** 에 layout 컴포넌트 사용하기

- \_app.js 는 page를 Component로 받아서 랜더링 해준다.
- 이를 감싸는 layout층을 줄 수 있음

```js
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
```
