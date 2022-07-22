import "./index.css";

const CardItem = (props) => {
  const { cardDetails } = props;
  const { title, description, imgUrl, className } = cardDetails;

  return (
    <li className={className}>
      <h1 className="title">{title}</h1>
      <p className="paragraph">{description}</p>
      <img src={imgUrl} className="imageurl" alt="title" />
    </li>
  );
};

export default CardItem;
