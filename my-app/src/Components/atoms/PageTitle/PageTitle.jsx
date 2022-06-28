import { PageTitleHeader, PageTitleText, UserButtonArea } from "./styles";
import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const PageTitle = (props) => {
  const navigate = useNavigate();
  return (
    <PageTitleHeader>
      <PageTitleText>
        <h1>{props.title}</h1>
      </PageTitleText>
      <UserButtonArea>
        <Button
          size="md"
          text="Login/Register"
          onClickHandler={() => navigate(`/login`)}
        />
      </UserButtonArea>
    </PageTitleHeader>
  );
};

export default PageTitle;
