import React from "react";
// import "./starred.styles.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectStarredList } from "../../redux/starred/starred.selectors";
import StarList from "../star-list/star-list.component";
import { StarredContainer, NoItem, StarredHeading } from "./starred.styles";

const Starred = ({ starredItems }) => {
  // console.log(starredItems.length);

  return (
    <StarredContainer>
      {starredItems.length > 0 ? (
        <div>
          <StarredHeading>STARRED</StarredHeading>
          {starredItems.map((starred, index) => (
            <StarList key={index} starred={starred} />
          ))}
        </div>
      ) : (
        <NoItem>Nothing In starred</NoItem>
      )}
      {/* {starredItems.map((starred, index) => (
        <StarList key={index} starred={starred} />
      ))} */}
    </StarredContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  starredItems: selectStarredList,
});
export default connect(mapStateToProps)(Starred);
