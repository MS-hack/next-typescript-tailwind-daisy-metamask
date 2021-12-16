// profileState.ts
import { atom } from "recoil";
import { UserProfile } from "../types";
export const profileState = atom<UserProfile>({
    key: "userProfile",
    default: {
        name: "default.user",
        photo: "default.photo",
        cover: "default.cover"
    },
});