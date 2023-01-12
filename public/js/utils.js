

/**
 Name        : FisEmpty;
 Objective   : Check if the content is a valid content.
 @Params     : (e) e : content to check.
 @Output     : (boolean)
 Author      : Ricardo Scarpim
 Date        : 10/11/2019
 */
export const FisEmpty = (e) => {

    switch (e) {
        case "":
        case 0:
        case "0":
        case null:
        case false:
        case typeof this == "undefined":
            return true;
        default:
            return false;
    }
};