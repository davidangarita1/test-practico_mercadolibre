import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {clearSearch} from "../../../redux/actions/search/searchActions";
import {Item} from "../../../types";

const useItemCard = (item: Item) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (): void => {
        dispatch(clearSearch())
        navigate(`/items/${item.id}`);
    }

    return {
        handleClick
    }
};

export default useItemCard;