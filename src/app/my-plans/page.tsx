"use client";
import Layout from "@/components/layout";
import styles from "./page.module.css";
import { Plan } from "@/components/plans/PlanTypes";
import PlanList from "@/components/plans/plan-list/PlanList";

const plans = [
  {
    id: 1,
    title: 'Create a YouTube Channel',
    steps: [
      {
        order: 1,
        title: 'Identify Your Niche and Target Audience',
        items: [
          {
            order: 1,
            text: 'Research Popular Topics: Look at existing channels to see what’s trending and what people are interested in.'
          },
          {
            order: 2,
            text: 'Pick a Niche: Choose a topic you’re passionate about (e.g., tech reviews, cooking, vlogs, gaming). Your niche should align with your interests and skills.'
          },
          {
            order: 3,
            text: 'Define Your Audience: Think about the demographic you want to reach—age, interests, language, and preferences.'
          }
        ]
      },
      {
        order: 2,
        title: 'Create a YouTube Account',
        items: [
          {
            order: 1,
            text: 'Sign in to YouTube using your Google account.'
          },
          {
            order: 2,
            text: 'Set Up Your Channel Name: Choose a name that reflects your content and is easy to remember. It should be unique, brandable, and related to your niche.'
          },
          {
            order: 3,
            text: 'Customize Your Channel: Add a profile picture (ideally a logo or a clear headshot) and a cover image that represents your theme.'
          },
        ]
      },
      {
        order: 3,
        title: 'Plan Your Content Strategy',
        items: [
          {
            order: 1,
            text: 'Choose Video Formats: Will you make tutorials, reviews, daily vlogs, Q&As, or something else?'
          },
          {
            order: 2,
            text: 'Develop a Content Calendar: Plan video ideas in advance (e.g., list 10 video topics). Schedule at least one video per week to maintain consistency.'
          },
          {
            order: 3,
            text: 'Do Keyword Research: Use tools like TubeBuddy or VidIQ to find keywords and optimize your video topics for searchability.'
          },
        ]
      }
    ],
  },
  {
    id: 2,
    title: 'Sell Stock Music',
    steps: [
      {
        order: 1,
        title: 'Understand the Stock Music Market',
        items: [
          {
            order: 1,
            text: 'What is Stock Music? It\'s royalty-free music that creators can purchase and use without paying recurring fees.'
          },
          {
            order: 2,
            text: 'Who Buys Stock Music? Filmmakers, advertisers, content creators, and businesses looking for affordable music for their projects.'
          },
          {
            order: 3,
            text: 'Market Demand: Popular genres include corporate, cinematic, ambient, electronic, and acoustic tracks that are versatile and widely applicable.'
          }
        ]
      },
      {
        order: 2,
        title: 'Prepare Your Music',
        items: [
          {
            order: 1,
            text: 'High-Quality Recordings: Ensure your tracks are professionally recorded, mixed, and mastered.'
          },
          {
            order: 2,
            text: 'Multiple Versions: Create different versions of your tracks (full-length, loops, short edits, instrumental versions) to increase their usability.'
          },
          {
            order: 3,
            text: 'Genre and Mood Focused: Produce music that fits common genres and moods sought after in the stock music market.'
          }
        ]
      },
    ]
  }
];

const MyPlans = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <PlanList plans={plans as Plan[]}/>
      </div>
    </Layout>
  );
};

export default MyPlans;
