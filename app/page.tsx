import { Hero, Posts } from "./components";
import PageLayout from "./components/page-layout";


export default async function Home() {
  return (
    <PageLayout>
      <Hero />
      <Posts />
    </PageLayout>
  )
}
