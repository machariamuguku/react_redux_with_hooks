import React from "react";
// redux hooks
import { useSelector, useDispatch } from "react-redux";
// redux actions
import { setPeople, unSetPeople } from "../redux/actions";
// fetch GET request
import { getData } from "../Utils/fetchUtils";

import { Row, Col, Spin, Button, Pagination } from "antd";

// components
import Person from "./Person";

function App() {
  // redux state (from store)
  // useSelector subscribes to the store and gets current state
  // by how the reducer is exported in combinedReducers
  const people = useSelector(state => state.People);
  // dispatch -> dispatches an action to the reducer
  // (hey, send this action to the reducer, with this payload)
  const dispatch = useDispatch();

  // fetch request to fetch people
  function fetchPeople(url = "https://swapi.co/api/people") {
    // set loading to true
    dispatch(setPeople({}, true));
    // after receiving the data
    // set it to state
    // and fetching to false
    getData(url).then(data => {
      // Dispatch JSON data
      // already parsed by `response.json()`
      dispatch(setPeople(data, false));
    });
  }

  let fetched =
    Object.keys(people.people).length > 0 && people.people.results.length > 0;
  return (
    <Row>
      {/* loading spinner */}
      {people.loading === true && (
        <Col
          span={4}
          offset={3}
          style={{ marginTop: "20%", marginLeft: "50%" }}
        >
          <Spin size="large" />
        </Col>
      )}

      {/* People */}
      {fetched && (
        <Row>
          {people.people.results.map((singlePerson, index) => (
            <Col
              xs={{ span: 5, offset: 1 }}
              lg={{ span: 5, offset: 2 }}
              key={index}
            >
              <Person person={singlePerson} />
            </Col>
          ))}
        </Row>
      )}

      {/* Pagination */}
      {fetched && (
        <Row style={{ marginTop: "40", marginLeft: "40%", marginBottom: "40" }}>
          <Pagination
            defaultCurrent={1}
            current={
              // extract page no from next url pagination cursor
              // e.g "https://swapi.co/api/people/?page=9"
              // check if next page is null
              // if it is show the rounded off final page (nearest 1s)
              // else extract from pagination cursor
              people.people.next === null
                ? Math.ceil(people.people.count / 10)
                : parseInt(people.people.next.split("?")[1].split("=")[1]) - 1
            }
            // round off to nearest 10s
            total={Math.ceil(people.people.count / 10) * 10}
            onChange={pageNo => {
              // fetch for that page no
              fetchPeople(`https://swapi.co/api/people/?page=${pageNo}`);
            }}
          />
        </Row>
      )}

      {/* action buttons */}
      {!people.loading === true && (
        <Row
          style={
            fetched
              ? { marginTop: "1%", marginLeft: "40%" }
              : { marginTop: "15%", marginLeft: "40%" }
          }
        >
          <Col span={4} offset={3}>
            <Button
              type={fetched ? "danger" : "primary"}
              shape="round"
              icon={fetched ? "delete" : "search"}
              size="large"
              onClick={() => {
                if (fetched) {
                  dispatch(unSetPeople());
                } else {
                  fetchPeople();
                }
              }}
            >
              {fetched ? "Delete" : "Fetch"}
            </Button>
          </Col>
        </Row>
      )}
    </Row>
  );
}

export default App;
