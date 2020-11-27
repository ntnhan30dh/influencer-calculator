import React from "react";
import { StickyTable, Row, Cell } from "react-sticky-table";

import deleteImg from "../images/delete.png"
import editImg from "../images/edit.png"



const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});



// const influencerArr = [
//   {
//     "id": "nh1606387908338",
//     "name": "nh",
//     "link": "ddd",
//     "followers": "123",
//     "category": "Celebrities",
//     "platform": "Instagram_TV",
//     "prominence": "C",
//     "price": 1055.2825,
//     "audienceFit": "45",
//     "targetGroup": "54",
//     "brandFit": "0.5",
//     "contentValue": 1000,
//     "type": "existing",
//     "influencerValue": "455",
//     "country": "Norway"
//   },
//   {
//     "id": "nhan trong1606387961179",
//     "name": "nhan trong",
//     "link": "www.dingua.com",
//     "followers": "123562111",
//     "category": "Young Families",
//     "platform": "Instagram_Post",
//     "prominence": "A",
//     "price": 1054.7965,
//     "audienceFit": "45",
//     "targetGroup": "54",
//     "brandFit": "0.5",
//     "contentValue": 1000,
//     "type": "existing",
//     "influencerValue": "451",
//     "country": "Peru"
//   },
//   {
//     "id": "Ngua deo1606387987796",
//     "name": "Ngua deo",
//     "link": "www.dingua.com",
//     "followers": "123562",
//     "category": "Young Families",
//     "platform": "TikTok",
//     "prominence": "A",
//     "price": 1152.76053088,
//     "eng": "6328",
//     "imp": "6328",
//     "audienceFit": "45",
//     "targetGroup": "54",
//     "brandFit": "0.5",
//     "contentValue": 1000,
//     "type": "new",
//     "influencerValue": "451",
//     "country": "Peru"
//   },
//   {
//     "id": "Ngua deo1606387987796",
//     "name": "Ngua deo",
//     "link": "www.dingua.com",
//     "followers": "123562",
//     "category": "Young Families",
//     "platform": "TikTok",
//     "prominence": "A",
//     "price": 1152.76053088,
//     "eng": "6328",
//     "imp": "6328",
//     "audienceFit": "45",
//     "targetGroup": "54",
//     "brandFit": "0.5",
//     "contentValue": 1000,
//     "type": "new",
//     "influencerValue": "451",
//     "country": "Peru"
//   },
//   {
//     "id": "Ngua deo1606387987796",
//     "name": "Ngua deo",
//     "link": "www.dingua.com",
//     "followers": "123562",
//     "category": "Young Families",
//     "platform": "TikTok",
//     "prominence": "A",
//     "price": 1152.76053088,
//     "eng": "6328",
//     "imp": "6328",
//     "audienceFit": "45",
//     "targetGroup": "54",
//     "brandFit": "0.5",
//     "contentValue": 1000,
//     "type": "new",
//     "influencerValue": "451",
//     "country": "Peru"
//   },
//   {
//     "id": "Ngua deo1606387987796",
//     "name": "Ngua deo",
//     "link": "www.dingua.com",
//     "followers": "123562",
//     "category": "Young Families",
//     "platform": "TikTok",
//     "prominence": "A",
//     "price": 1152.76053088,
//     "eng": "6328",
//     "imp": "6328",
//     "audienceFit": "45",
//     "targetGroup": "54",
//     "brandFit": "0.5",
//     "contentValue": 1000,
//     "type": "new",
//     "influencerValue": "451",
//     "country": "Peru"
//   },
//   {
//     "id": "Ngua deo1606387987796",
//     "name": "Ngua deo",
//     "link": "www.dingua.com",
//     "followers": "123562",
//     "category": "Young Families",
//     "platform": "TikTok",
//     "prominence": "A",
//     "price": 1152.76053088,
//     "eng": "6328",
//     "imp": "6328",
//     "audienceFit": "45",
//     "targetGroup": "54",
//     "brandFit": "0.5",
//     "contentValue": 1000,
//     "type": "new",
//     "influencerValue": "451",
//     "country": "Peru"
//   }
// ]
const Table = (props) => {
  const influencerArr = props.influencerArr
  return (
    <div className="table">
      {/* <div style={{ width: "100%", minHeight: "200px" }}> */}
        <StickyTable borderWidth={0} style={{ width: "100%", minHeight: "200px" }}>
          <Row className="tableHeader">
            <Cell className="name">name</Cell>
            <Cell className="rest">link</Cell>
            <Cell className="rest">followers</Cell>
            <Cell className="rest">category</Cell>
            <Cell className="rest">platform</Cell>
            <Cell className="rest">prominence</Cell>
            <Cell className="rest">EST. PRICE</Cell>
            <Cell className="rest"></Cell>
          </Row>
          {/* {console.log(props.influencerArr)} */}
          {/* {props.influencerArr.map((item) => ( */}
          {influencerArr.map((item) =>{
            let nameBg = influencerArr.indexOf(item)% 2===0?"cell even_name":"cell odd_name";
            let restBg = influencerArr.indexOf(item)% 2===0?"cell even_rest":"cell odd_rest"
            return (
            <Row className="tableContent">
              <Cell className={nameBg}>{item.name}</Cell>
              <Cell className={restBg}>{item.link}</Cell>
              <Cell className={restBg}>{new Intl.NumberFormat().format(item.followers)}</Cell>
              <Cell className={restBg}>{item.category}</Cell>
              <Cell className={restBg}>{item.platform}</Cell>
              <Cell className={restBg}>{item.prominence}</Cell>
              <Cell className={restBg}>{formatter.format(item.price)}</Cell>
              <Cell className={restBg}>
                {" "}
                <button onClick={()=>props.handleEdit(item.id)}>  <img src={editImg} alt="edit" /></button>
                <button
                  type="button"
                  onClick={() => props.handleRemove(item.id)}
                >
                <img src={deleteImg} alt="delete" />
                </button>
              </Cell>
            </Row>
          )
          }
           
          )}
        </StickyTable>
      {/* </div> */}

      
    </div>
  );
};

export default Table;
