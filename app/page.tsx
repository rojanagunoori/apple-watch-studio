import { FiltersProvider } from "@/context/FiltersContext";
import WatchStatingPage from "../src/components/WatchStatingPage"
import styles from "../styles/Page.module.css";



export default function Home() {
  return (
    <div className={styles.con}>
       <FiltersProvider >
       <WatchStatingPage />
       </FiltersProvider>
     

    </div>
  );
}
