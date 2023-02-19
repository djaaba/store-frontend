import cn from "classnames";
import { ICharacteristic } from "../../../shared";
import { getId } from "../../../utils";
import { ItemWithDots } from "../../UI/index";

import styles from "./Characteristics.module.css";
import { CharacteristicsProps } from "./Characteristics.props";

export const Characteristics = ({
    characteristics,
    className,
    ...props
}: CharacteristicsProps): JSX.Element => {
    const length = characteristics.length / 2;

    return (
        <>
            {characteristics.length > 5 ? (
                <section className={cn(styles.container, className)}>
                    <div>
                        {characteristics
                            .slice(0, length)
                            .map((item: ICharacteristic) => (
                                <ItemWithDots
                                    key={getId()}
                                    size="p"
                                    title={item.title}
                                    subtitle={item.subtitle}
                                />
                            ))}
                    </div>
                    <div>
                        {characteristics
                            .slice(length)
                            .map((item: ICharacteristic) => (
                                <ItemWithDots
                                    key={getId()}
                                    size="p"
                                    title={item.title}
                                    subtitle={item.subtitle}
                                />
                            ))}
                    </div>
                </section>
            ) : (
                <section className={className}>
                    {characteristics.map((item: ICharacteristic) => (
                        <ItemWithDots
                            key={getId()}
                            size="p"
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    ))}
                </section>
            )}
        </>
    );
};
