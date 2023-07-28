/**
 * Contains a list of types used in as type of state useState<Type>()
 */


export type InputState = {
    value: string;
    error: boolean;
    errorMessage: string;
}



export const inputStateD : InputState = {
    value: "",
    error: false,
    errorMessage: "",
}