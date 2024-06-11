import React, { FC, useState } from "react";
import { IUserProps } from "../../mogels/User.model";
import styles from "./User.module.css";

type IPropsType = IUserProps & { lift?: (userId: number) => void } & { liftCart?: (userId: number) => void };

const User: FC<IPropsType> = ({
                                  id,
                                  firstName,
                                  lastName,
                                  hair,
                                  company,
                                  lift,
                                  liftCart
                              }) => {
    const [showHair, setShowHair] = useState(false);
    const [showCompany, setShowCompany] = useState(false);

    const onclickHair = () => {
        setShowHair(!showHair);};

    const onClickCompany = () => {
        setShowCompany(!showCompany);};

    function onClickHandler() {
        if (lift) {
            lift(id);}}

    function onClickCart() {
        if (liftCart) {
            liftCart(id);}}

    return (
        <div className={styles.classUser}>
            <div className={styles.classUser}>
                <div className={styles.classUser}>
                    <div>{id} - {firstName} {lastName}</div>
                </div>
                <hr />
                <div>
                    <button onClick={onclickHair}>hair</button>
                    <button onClick={onClickCompany}>company</button>
                    <button onClick={onClickHandler}>posts</button>
                    <button onClick={onClickCart}>cart</button>
                </div>
            </div>
            <hr />
            <div>
                {showHair && hair && (
                    <div>
                        <p>{hair.color} * {hair.type}</p>
                    </div>
                )}
                {showCompany && company && (
                    <div>
                        <p>
                            {company.title},
                            {company.department}
                        </p>
                        <p>
                            {company.address?.city},
                            {company.address?.state}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default User;
