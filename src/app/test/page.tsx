import {FC} from "react";
import {Button} from "@/shared/ui/buttons";
import {Input} from "@/shared/ui/input";
import SwitherTheme from "@/features/theme/swither-theme";
import Icon from "@/shared/ui/icon";
import {IIconName} from "@/shared/interface/icon";
import {icons} from "@/shared/ui/icon/state";

const TestPage: FC = () => (
    <main className="flex flex-col gap-6">
        <h1>UI kit</h1>

        <div>
            <h2>Icons</h2>
            <div className="flex items-center gap-3">
                <SwitherTheme/>
                {Object.keys(icons).map((key, i) => <Icon name={key as IIconName} key={i}/> )}
            </div>
        </div>

        <div>
            <h2>Buttons</h2>
            <Button>Кнопка</Button>
        </div>

        <div>
            <h2>Inputs</h2>
            <Input placeholder="Input" label="Input" error="error"/>
            <Input type="file" label="Upload file input" error="error"/>
        </div>
    </main>
);

export default TestPage;