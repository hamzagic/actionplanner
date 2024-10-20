"use client";
import Layout from "@/components/layout";
import styles from "./page.module.css";

const Planner = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Create Your New Planner</h1>
        <div className={styles.promptContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Prompt"
          />
          <button>Create</button>
        </div>
      </div>
    </Layout>
  );
};

export default Planner;
