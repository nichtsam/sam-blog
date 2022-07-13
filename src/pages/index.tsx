import type { NextPage } from "next"
import { WorkInProgress } from "@/components/layouts/WorkInProgress"
import { PageContainer } from "@/components/layouts/PageContainer"

const Home: NextPage = () => (
  <PageContainer>
    <WorkInProgress />
  </PageContainer>
)

export default Home
