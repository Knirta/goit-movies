import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import movieAPI from "../../sevices/movies-api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async (movieId) => {
      const reviews = await movieAPI.fetchReviewsById(movieId);
      setReviews(reviews);
    };
    getReviews(movieId);
  }, [movieId]);
  return reviews.length > 0 ? (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={s.item}>
          <p className={s.author}>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>The are no reviews yet</p>
  );
};

export default MovieReviews;
