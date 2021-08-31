import Image from "next/image";
import HeadInfo from "../components/HeadInfo";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <HeadInfo title={"my blogs"} />
      <h2>Welcome</h2>
    </div>
  );
}
