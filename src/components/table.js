import React from "react";
import { StickyTable, Row, Cell } from "react-sticky-table";




const Table = (props) => {
  return (
    <div className="table">
      <div style={{ width: "100%", minHeight: "200px" }}>
        <StickyTable>
          <Row>
            <Cell>name</Cell>
            <Cell>link</Cell>
            <Cell>followers</Cell>
            <Cell>category</Cell>
            <Cell>platform</Cell>
            <Cell>prominence</Cell>
            <Cell>Estimated price</Cell>
          </Row>
          {props.influencerArr.map((item) => (
            <Row>
              <Cell>{item.name}</Cell>
              <Cell>{item.link}</Cell>
              <Cell>{item.followers}</Cell>
              <Cell>{item.category}</Cell>
              <Cell>{item.platform}</Cell>
              <Cell>{item.prominence}</Cell>
              <Cell>{item.price}</Cell>
              {/* <Cell>{item.id}</Cell> */}
              <Cell>
                {" "}
                <button
                  type="button"
                  onClick={() => props.handleRemove(item.id)}
                >
                  Remove
                </button>
              </Cell>
            </Row>
          ))}
        </StickyTable>
      </div>

      
    </div>
  );
};

export default Table;
