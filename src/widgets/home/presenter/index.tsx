import {Container} from "@/shared/ui/wrappers";
import {HeaderLayout} from "@/widgets/layout";
import MainWrapper from "@/shared/ui/wrappers/main";
import {Button} from "@/shared/ui/buttons";

const tagsList = [
    "Ai/ml",
    "Web/mobile",
    "crm",
    "highload",
    "ar/vr",
    "blockchain",
    "3d"
]

const PresenterWidget = () => (
    <MainWrapper style={{backgroundImage: "url(/image/bg/paper.png)"}}
                 className="overflow-hidden relative bg-no-repeat bg-cover pt-[32px] pb-[48px] z-[1]">
        <div className="bg-[#fff] dark:bg-[#000] opacity-85 absolute h-full w-full top-0 left-0 z-[-1]"/>
        <Container>
            <HeaderLayout/>
            <div className="flex flex-col gap-[36px] pt-[80px] pb-[130px]">
                <h1>Эффективная разработка для ваших целей</h1>

                <div className="flex items-center gap-[8px]">
                    <Button>Связаться с нами</Button>
                    <span className="font-semibold"> — заполните форму и мы предложим оптимальное решение.</span>
                </div>
            </div>

            <ul className="flex gap-[32px] uppercase">
                {
                    tagsList.map((tag, i) => <li key={i}>{tag}</li>)
                }
            </ul>
        </Container>
        <div className="flex h-[142px]">
            <div className="z-[-1] before:rounded-bl-[32px] absolute h-[142px] before before:bg-[#fff] before:block before:absolute before:top-[-40px] before:h-[40px] before:w-[40px] bottom-0 left-0 bg-bg-light dark:bg-bg-dark w-[818px]"/>
            <div className="w-[568px]">

            </div>
        </div>
    </MainWrapper>
);

export {PresenterWidget}