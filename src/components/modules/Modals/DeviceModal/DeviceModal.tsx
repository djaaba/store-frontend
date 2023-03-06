import cn from "classnames";
import React from "react";
import HyperModal from 'react-hyper-modal';

import styles from "./DeviceModal.module.css";
import { DeviceModalProps } from "./DeviceModal.props";

import { getId } from "@/utils";
import { IBrand, IDeviceInfo } from "@/shared";
import { Button, FontAwesomeIcon, Input, TrashIcon } from "@/components/UI";

export const DeviceModal = ({ types, brands, ...props }: DeviceModalProps): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState(false);

    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState(0);
    const [info, setInfo] = React.useState<IDeviceInfo[]>([])
    const [type, setType] = React.useState();
    const [brand, setBrand] = React.useState();


    const addInfo = () => {
        setInfo([...info, { title: '', description: '', id: getId() }])
    }

    const removeInfo = (id: number) => {
        setInfo(info.filter(item => item.id !== id))
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Добавить устройство</button>
            <HyperModal requestClose={() => setIsOpen(false)} isOpen={isOpen}>
                <h2>Выберите тип</h2>
                <select value={type} onChange={(e: any) => setType(e.target.value)}>
                    {
                        types.map((item: any) => (
                            <option key={getId()}>{item.name}</option>
                        ))
                    }
                </select>

                <h2>Выберите бренд</h2>
                <select value={brand} onChange={(e: any) => setBrand(e.target.value)}>
                    {
                        brands.map((item: IBrand) => (
                            <option key={getId()}>{item.name}</option>
                        ))
                    }
                </select>
                <div>
                    <input type="file" />
                </div>
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input type="number" value={price} onChange={(e) => setPrice(+e.target.value)} />
                </div>

                <Button className={styles.btn} color="red" size="medium" onClick={() => addInfo()}>
                    Добавить новое свойство
                </Button>
                {
                    info.map((item) => (
                        <div className={styles.properties} key={item.id}>
                            <input type="text" placeholder="Введите название свойства"></input>
                            <input type="text" placeholder="Введите описание свойства"></input>
                            <Button onClick={() => removeInfo(item.id)} className={styles.btn} size="small" color="dark">
                                <FontAwesomeIcon
                                    icon={TrashIcon}
                                />
                            </Button>
                        </div>
                    ))
                }
            </HyperModal>
        </>
    );
};

