import { FC } from "react";
import { FixedBottomNav, Header } from "../components/Shared";

export const BaseLayout: FC = () => {
  return (
    <div>
      <Header></Header>
      <FixedBottomNav></FixedBottomNav>
    </div>
  )
}
