import { useState } from "react";
import { Template, ProfileMenu, ProfileCard } from "../components";

export const Profile = () => {
    const [state, setState] = useState({
        firstName: 'Vasya',
        lastName: 'Ivanov',
        birthday: '1999-04-03',
    });

    const updateUser = (newUser) => {
        setState((user) => {
            return { ...user, ...newUser }
        });
    }

    return (
        <Template leftSideBar={<ProfileMenu {...user} />}>
            <ProfileCard {...user} updateUser={updateUser} />
        </Template>
    );
}