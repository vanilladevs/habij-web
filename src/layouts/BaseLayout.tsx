import { FC } from "react";
import { FixedBottomNav, Header, NewHabitButton } from "../components/Shared";

export const BaseLayout: FC = () => {
  return (
    <div>
      <Header></Header>
      <NewHabitButton />
      <FixedBottomNav></FixedBottomNav>
    </div>
  )
}
