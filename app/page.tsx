import { Footer, Hero, Navigation, Posts } from "./components";

export default async function Home() {
  return (
    <main className="space-y-6 container max-w-screen-lg mx-auto">
      <Navigation />
      <Hero />
      <Posts />
      <Footer />
    </main>
  )
}
