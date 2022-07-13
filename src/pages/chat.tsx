import { NextPage } from "next"
import { WorkInProgress } from "@/components/layouts/WorkInProgress"
import { PageContainer } from "@/components/layouts/PageContainer"

const ChatPage: NextPage = () => {
  return (
    <PageContainer>
      <WorkInProgress />
    </PageContainer>
  )
}

export default ChatPage
