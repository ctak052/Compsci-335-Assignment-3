import {StaffCardContainer, StaffTextArea, StaffTextH4, StaffTextA} from "./styles";
import Button from "../../atoms/Button/Button";


const StaffCard = (props) => {
  return (
    <StaffCardContainer>
      <a href={props.staff.url} target="_blank" rel="noreferrer">
        <img
          src={props.staff.image}
          className="profile_image"
          alt="Staf Portrait"
        />
      </a>
      <StaffTextArea>
        <StaffTextA href={props.staff.url} target="_blank" rel="noreferrer">
          <h3>{props.staff.name}</h3>
        </StaffTextA>
        <StaffTextA
          href={`tel:${props.staff.telNumber}`}
          target="_blank"
          rel="noreferrer"
        >
          <StaffTextH4>{props.staff.telNumber}</StaffTextH4>
        </StaffTextA>
        <StaffTextA
          href={`mailto:${props.staff.email}`}
          target="_blank"
          rel="noreferrer"
        >
          <StaffTextH4>{props.staff.email}</StaffTextH4>
        </StaffTextA>
        <StaffTextH4>{props.staff.categories}</StaffTextH4>
        <StaffTextA href={props.staff.vCardURL}>
          <Button size="sm" text="Add To Address Book" />
        </StaffTextA>
      </StaffTextArea>
    </StaffCardContainer>
  );
};

export default StaffCard;
