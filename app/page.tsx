import { Footer, Hero, Navigation, Posts } from "./components";

export default async function Home() {
  return (
    <main className="px-4 space-y-6 container max-w-screen-lg mx-auto">
      <Navigation />
      <Hero />
      <Posts />
      <Footer />
    </main>
  )
}
