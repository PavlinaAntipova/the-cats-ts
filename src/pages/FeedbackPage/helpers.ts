import { TVoteInfo } from "@app/api/types/vote";
import { FEEDBACK_VALUES } from "@app/constants";
import ROUTES from "@app/constants/routes";

export const filterDataByPage = (data: TVoteInfo[], pathname: string): TVoteInfo[] => {
    return data.filter(item => {
        if (pathname === ROUTES.likes) {
            return item.value === FEEDBACK_VALUES.likes;
        } 

        if (pathname === ROUTES.dislikes) {
            return item.value === FEEDBACK_VALUES.dislikes;
        } 
        
})
}