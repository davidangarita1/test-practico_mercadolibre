import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setSearch} from "../../../redux/actions/search/searchActions";

const useCategoryList = (categories: string[]) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const redirect = (text: string): void => {
        dispatch(setSearch(text));
        sessionStorage.setItem('lastSearch', `${text}`)
        navigate(`/items?search=${text}`);
    };

    const isTheLastCategory = (index: number): boolean => index === categories.length - 1

    return {
        redirect,
        isTheLastCategory
    }
};

export default useCategoryList;