## 핵심 컨셉

### ✅ pages/ 폴더 자체가 라우팅 기능을 제공

- pathname 변수 주는 방법
- static 파일을 제공 : public 폴더를 정적폴더로 사용하므로, URL 요청하면 제공한다.
- eg) localhost:3000/favicon.ico

### ✅ Head 컴포넌트를 이용한 header 태그 수정

```js
<Head>
  <title>{title}</title>
  <meta keyword={keyword}></meta>
  <meta content={contents}></meta>
</Head>
```

### ✅ Link 태그를 이용한 라우팅

- 목적 : 링크에 들어간 컴포넌트는 CSR 제공
- route url에서 첫 pages는 프리랜더를 제공

```js
import Head from "next/head"; // Head - (react-helmet)
import Link from "next/link"; // Link - (react-router-dom)

export default function Home() {
  return (
    <div>
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

### ✅ **\_app.js** 에 layout 컴포넌트 사용하기

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

### ✅ default props 지정하기

```js
const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword}></meta>
      <meta content={contents}></meta>
    </Head>
  );
};
HeadInfo.defaultProps = {
  title: "My Blog",
  keyword: "blog powered by Next js",
  contents: "practice next js",
};

export default HeadInfo;
```

### ✅ module.css 적용

- Next.js supports CSS Modules using the [name].module.css file naming convention.
- CSS를 마치 모듈 export 객체로 바라본다. 선택자를 . 을 이용해서 특정 요소의 classname에 대입.
- 이는 코드 스플리팅시, 최소한의 CSS만 로드되도록 보장

```jsx
// Nav.module.css
.navigation {
  background-color: cadetblue;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  min-height: 30px;
}
.navigation li {
  color: wheat;
  margin-right: 30px;
}


import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <ul className={navStyles.navigation}>
      <li>
        <Link href="/">home</Link>
      </li>
    </ul>
  );
};

```

### ✅ Image 컴포넌트 사용하기

- 반드시 src,width,height 설정을 해야 한다.
