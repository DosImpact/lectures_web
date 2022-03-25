import React from "react";
import Image from "next/image";
import Link from "next/link";

const index = ({ photo, renderingType }) => {
  // console.log("photo", photo);
  return (
    <section>
      <div>renderingType : {renderingType}</div>
      <h3>photo Detail {photo.id}</h3>
      <div>
        <Image
          src={photo.thumbnailUrl}
          alt={photo.title}
          width="500"
          height="500"
        />
        <div>{photo.title}</div>
      </div>
      <div>
        <Link href="/photos">go back</Link>
      </div>
    </section>
  );
};

export default index;

// 동적 라우팅 --> SSG 을 위해, 경로에 대한 정보를 context에서 가져온다.
export const getStaticProps = async (context) => {
  console.log("🚀 getStaticProps");
  //   console.log("context", context);
  //   context {
  //     params: { id: '1' },
  //     locales: undefined,
  //     locale: undefined,
  //     defaultLocale: undefined
  //   }
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${context.params.id}`
  );
  const photo = await res.json();
  // console.log("photo", photo);
  return {
    props: {
      photo,
      renderingType: "StaticStie",
    },
    revalidate: 300,
  };
};
// SSG을 선택했고, route 경로에 [ ] ( query,params) 가 있다면
// 해당 경로들의 Range를 지정해 줘야 한다.
export const getStaticPaths = async () => {
  console.log("🚀 getStaticPaths");
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();
  const paths = photos.map((photo) => {
    return { params: { id: String(photo.id) } };
  });
  //   console.log("path", paths);

  return {
    paths,
    // fallback: false,
    fallback: "blocking", // blocking 경우에는 경로가 없다면 context 동적으로 만들어 랜더링해서 제공
  };
};
