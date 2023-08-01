import { ImageSourcePropType } from "react-native"

export type User = {
    id: string;
    pfp: ImageSourcePropType;
    name: string;
}