import {Container} from "@/shared/ui/wrappers";
import {HeaderLayout} from "@/widgets/layout";
import MainWrapper from "@/shared/ui/wrappers/main";
import {BottomPresenter} from "@/widgets/home/presenter/ui";
import BodyPresenter from "@/widgets/home/presenter/ui/body";

const PresenterWidget = () => (
    <MainWrapper style={{backgroundImage: "url(/image/bg/paper.png)"}}
                 className="overflow-hidden relative bg-no-repeat bg-cover pt-[32px] pb-[48px] z-[1]">
        <div className="bg-[#fff] dark:bg-[#000] opacity-85 absolute h-full w-full top-0 left-0 z-[-1]"/>
        <Container>
            <HeaderLayout/>
            <BodyPresenter/>
        </Container>
        <BottomPresenter/>
    </MainWrapper>
);

export {PresenterWidget}