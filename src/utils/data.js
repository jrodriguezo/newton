import { generateDate } from "./date";

export const saveLift = ({user, lift}) => {

    const { weight, unit, training } = lift

    const data = {
        uid: user.uid,
        user: user.displayName.split(' ')[0],
        lifts: {
            [training]: {
                weight: Number(weight),
                date: generateDate(),
                unit: unit ?? 'kg'
            }
        }
    }

    return data
}
