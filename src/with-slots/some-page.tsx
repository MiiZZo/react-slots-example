import { PropsWithChildren } from "react";
import { slotsLib } from "./use-slots";

export const HeaderActionSlot = slotsLib.createSlot();
export const TitleSlot = slotsLib.createSlot();
export const FooterActionSlot = slotsLib.createSlot();
export const HeroSlot = slotsLib.createSlot();

function SomePageView({ children }: PropsWithChildren) {
  const { footerAction, headerAction, hero, title } = slotsLib.useSlots(
    children,
    {
      headerAction: HeaderActionSlot,
      footerAction: FooterActionSlot,
      title: TitleSlot,
      hero: HeroSlot,
    }
  );

  return (
    <div>
      <header
        style={{
          background: "green",
          width: "100%",
          padding: ".5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {title}
        <div>{headerAction}</div>
      </header>
      <main>
        {hero}
        <div>
          <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ol>
        </div>
      </main>
      <footer style={{ marginTop: 'auto', height: '50px', background: 'gray' }}>{footerAction}</footer>
    </div>
  );
}

export const SomePage = slotsLib.attachSlots(SomePageView, {
  HeaderAction: HeaderActionSlot,
  Title: TitleSlot,
  Hero: HeroSlot,
  FooterAction: FooterActionSlot,
})
