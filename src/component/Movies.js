const Movies = (props) => {
  return (
    <div className="Movies">
    <img src={props.img} />
    <p>Title:{props.title}</p>
    <p>Year: {props.year}</p>



    </div>
  )
}

export default Movies;