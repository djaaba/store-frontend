import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import cn from "classnames";
import React from "react";

import styles from "../Modal.module.css";
import { OrderModalProps } from "./OrderModal.props";

import { Button, CheckIcon, FontAwesomeIcon, Htag, ItemWithDots, TrashIcon } from "@/components/UI";
import { success } from "@/utils";
import { deleteOrder, deleteOrderItem, updateOrder } from "@/api";
import { selectUser } from "@/store/user/selector";


export const OrderModal = ({ devices, ...props }: OrderModalProps): JSX.Element => {
    const userInfo = useSelector(selectUser);
    const isDisabled = devices[0]?.status;

    const handleDeleteOrder = (order: string) => {
        deleteOrder(order)
        toast.success('Вы удалили заказ!', success);
    }

    const handleCloseOrder = (order: string) => {
        updateOrder(order)
        toast.success('Вы выдали заказ!', success);
    }

    const handleDeleteitem = (id: number) => {
        deleteOrderItem(id)
        toast.success('Вы удалили позицию!', success);
    }

    return (
        <>
            <Htag tag="h2">Заказ №{devices[0]?.order}</Htag>
            <div>

                <ul className={styles.orders}>
                    {
                        devices.map(elem => (
                            <li className={styles.order} key={elem.id}>
                                <ItemWithDots size="p" title={elem.device.name} subtitle={elem.count} />
                                {
                                    userInfo._user?.role === "ADMIN" ?
                                        <Button
                                            className={styles.btn}
                                            color="red"
                                            size="small"
                                            disabled={isDisabled}
                                            onClick={() => handleDeleteitem(elem.id)}
                                        >
                                            <FontAwesomeIcon
                                                icon={TrashIcon}
                                            />
                                        </Button>
                                        :
                                        ''
                                }
                            </li>
                        ))
                    }
                </ul>
                <p
                    className={devices[0]?.status ? styles.process : styles.processed}
                    // tag="h3"
                >
                    {devices[0]?.status ? 'Заказ обработан' : 'Заказ обрабатывается'}
                </p>
            </div>
            {
                userInfo._user?.role === "ADMIN" ?
                    <div className={styles.operations}>
                        <Button
                            className={styles.delete}
                            color="red"
                            size="small"
                            onClick={() => handleDeleteOrder(devices[0]?.order)}
                        >
                            <FontAwesomeIcon
                                icon={TrashIcon}
                            />
                        </Button>
                        <Button
                            className={styles.success}
                            color="red"
                            size="small"
                            disabled={isDisabled}
                            onClick={() => handleCloseOrder(devices[0]?.order)}
                        >
                            <FontAwesomeIcon
                                icon={CheckIcon}
                            />
                        </Button>
                    </div>
                    :
                    ''
            }
        </>
    );
};
