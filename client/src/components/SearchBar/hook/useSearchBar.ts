import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setSearch} from "../../../redux/actions/search/searchActions";
import {useState} from "react";
import {cleanItemList} from "../../../redux/actions";

const useSearchBar = () => {
    const [text, setText] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const redirect = (): void => {
        dispatch(setSearch(text));
        dispatch(cleanItemList());
        sessionStorage.setItem('lastSearch', `${text}`)
        navigate(`/items?search=${text}`);
    };

    const handleSubmit = (): void => {
        text !== '' && redirect()
    };

    const handleKeyPress = (key: string): void => {
        key === 'Enter' && text !== '' && redirect()
    };

    const handleChange = (value: string): void => {
        setText(value)
    };

    return {
        handleSubmit,
        handleKeyPress,
        handleChange,
        text
    }
}

export default useSearchBar;