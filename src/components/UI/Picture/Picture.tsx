import cn from "classnames";
import Image from 'next/image'

import styles from "./Picture.module.css";
import { PictureProps } from "./Picture.props";

export const Picture = ({
    children,
    imgUrl,
    className,
    alt,
    width,
    height,
    ...props
}: PictureProps): JSX.Element => {

    return (
        <>
            <div {...props} className={cn(styles.main, className)}>
                <picture>
                    <Image loader={() => imgUrl}
                        height={height}
                        width={width}
                        alt={alt} className={styles.img} src={imgUrl} />
                </picture>
            </div>
        </>
    );
};
