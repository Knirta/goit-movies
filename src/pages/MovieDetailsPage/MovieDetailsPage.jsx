import { useParams } from "react-router-dom";
import Container from "../../components/Container";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  return (
    <Container>
      <h1>Movie {movieId} details page</h1>
    </Container>
  );
};

export default MovieDetailsPage;
