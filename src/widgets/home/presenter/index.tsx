import {Container} from "@/shared/ui/wrappers";
import {HeaderLayout} from "@/widgets/layout";
import MainWrapper from "@/shared/ui/wrappers/main";
import {Button} from "@/shared/ui/buttons";
import Icon from "@/shared/svg";
import {tagsList} from "@/shared/data/home/presente";

const PresenterWidget = () => (
  <MainWrapper style={{backgroundImage: "url(/image/bg/paper.png)"}}
               className="overflow-hidden relative bg-no-repeat bg-cover pt-[32px] pb-[48px] z-[1]">
    <div className="bg-[#fff] dark:bg-[#000] opacity-85 absolute h-full w-full top-0 left-0 z-[-1]"/>
    <Container>
      <HeaderLayout/>
      <div className="flex max-w-[1120px] flex-col gap-[36px] pt-[80px] pb-[130px]">
        <h1>Эффективная разработка для ваших целей</h1>

        <div className="flex items-center gap-[8px]">
          <Button>Связаться с нами</Button>
          <span className="font-semibold">
             — заполните форму и мы предложим оптимальное решение.
          </span>
        </div>
      </div>
      <ul className="flex gap-[32px] uppercase">
        {tagsList.map((tag, i) => <li key={i}>{tag}</li>)}
      </ul>
    </Container>
    <div className="flex h-[142px] w-full justify-end">
      <div className="z-[-1] absolute h-[142px] bottom-0 rounded-tr-[32px] left-0 bg-bg-light dark:bg-bg-dark w-[818px]">
        <Icon name="triangle-rounded" className="fill-bg-light dark:fill-bg-dark absolute top-[-32px]" />
        <Icon name="triangle-rounded" className="fill-bg-light dark:fill-bg-dark absolute bottom-0 right-[-32px]" />
      </div>
      <div className="w-[440px] pt-[37px]">
        <span className="text-accent uppercase text-[12px]">Выбор на нас</span>
        <p className="leading-[22.4px]">
          Мы команда профессионалов, которая уже 12 лет успешно реализует проекты любой сложности.
          Наш приоритет – результат, и наша команда готова обеспечить его достижение.
        </p>
      </div>
    </div>
  </MainWrapper>
);

export {PresenterWidget}