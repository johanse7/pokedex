import { Outlet } from "react-router";
import styles from "./MainLayout.module.css";

export function MainLayout() {
  return (
    <main className={styles.layout}>
      <div className={styles.mainContent}>
        <Outlet />
      </div>
    </main>
  );
}
