import React from "react";
import cn from "classnames";

import styles from "./Characteristics.module.css";
import { CharacteristicsProps } from "./Characteristics.props";

import { ICharacteristic } from "@/shared";
import { getId } from "@/utils";
import { ItemWithDots } from "@/components/UI";

export const Characteristics = ({
    characteristics,
    className,
    ...props
}: CharacteristicsProps): JSX.Element => {
    const length = characteristics?.length / 2;

    return (
        <React.Fragment {...props}>
            {characteristics?.length > 5 ? (
                <section className={cn(styles.container, className)}>
                    <div>
                        {characteristics
                            .slice(0, length)
                            .map((item: ICharacteristic) => (
                                <ItemWithDots
                                    key={item.id}
                                    size="p"
                                    title={item.title}
                                    subtitle={item.description}
                                />
                            ))}
                    </div>
                    <div>
                        {characteristics
                            ?.slice(length)
                            .map((item: ICharacteristic) => (
                                <ItemWithDots
                                    key={item.id}
                                    size="p"
                                    title={item.title}
                                    subtitle={item.description}
                                />
                            ))}
                    </div>
                </section>
            ) : (
                <section className={className}>
                    {characteristics?.map((item: ICharacteristic) => (
                        <ItemWithDots
                            key={item.id}
                            size="p"
                            title={item.title}
                            subtitle={item.description}
                        />
                    ))}
                </section>
            )}
        </React.Fragment>
    );
};
