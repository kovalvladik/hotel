import React, {useState} from 'react';
import './Licked.css'
import SelectVariants from "./Selected";
import Like from "./Like";
import {useDispatch, useSelector} from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import BasicRating from "./Rating";
import IconCheckboxes from "./Like";
import {deleteLike, liked, updateLikedItems, updateLikes} from "../../redux/reducers";

const Liked = () => {
    const likes = useSelector(state => state.like)
    const [isLiked,setIsLiked] = useState(true)

    const day = useSelector(state => state.day)
    const month = useSelector(state => state.month)
    const year = useSelector(state => state.year)
    const enteredDays = useSelector(state => state.days)
    const dispatch = useDispatch()
    const rr = (id) => {
        if (isLiked===true){
            dispatch(deleteLike(id))
            dispatch(updateLikedItems())
        }
    }

    console.log(likes)




    const handleSortScore = (likes) => {
      const arr = likes
        // arr.map((el)=> el.id)
        // console.log( arr.map((el)=> Number(el.id)))
        // arr.sort(function(a, b) {
        //         return a.id - b.id;
        //     });
       arr.sort(function(a, b) {
          return Number(a._score) - Number(b._score);
      })
        dispatch(updateLikes(arr))

    }
    const handleSortPrice = (likes) => {
      const arr2 = likes
       arr2.sort(function(a, b) {
          return Number(a.locationId) - Number(b.locationId);

      })
        dispatch(updateLikes(arr2))
    }



    return (
        <div className='liked__container'>
            <p className='liked__name'>Избранное</p>
            <SelectVariants handleSortScore={handleSortScore} handleSortPrice={handleSortPrice} likes={likes}/>
            <div className='liked__item__container'>
                {likes.map((el)=>(
                    <div className='item__container item__container__liked '>
                        <div className='item_name__container'>
                            <p className='item__text'>{el.label}</p>
                            <p className='item__text__new'>{day} {month} {year} - {enteredDays}  день</p>
                            <BasicRating props={el._score}/>
                        </div>

                        <div className='item_price_container'>
                            <IconCheckboxes style={{paddingLeft:'100px'}} isLiked={isLiked} setIsLiked={setIsLiked} rr={rr}id={el.id} />
                            <p className='login-wrapper__name'> Price: {el.locationId} ₽</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Liked;
