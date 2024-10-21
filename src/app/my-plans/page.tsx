"use client";
import Layout from "@/components/layout";
import styles from "./page.module.css";

const MyPlans = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div>Current Plans</div>
        <ul>
          <li>Create a YouTube Channel</li>
          <li>Build an Arduino Midi Controller</li>
        </ul>
      </div>
    </Layout>
  );
};

export default MyPlans;
