import React, { CSSProperties, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuBar from '../Component/Menubar';
import NoticeLine from '../Component/NoticeLine';
import './CSS/MissionModule.css';

const style: CSSProperties = {
  paddingTop: '20px',
  paddingLeft: '20px',
  paddingRight: '20px',
  height: window.innerHeight * 0.9,
};
function Mission() {
  const param = useParams();
  const [over, setOver] = useState(false);
  const [number, setNumber] = useState(-1);
  const memberlist = [
    'jikwon',
    1,
    '요거트 스무디',
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
  ];
  const content = [
    "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
    'window ',
    'blow',
    'candycandy',
    8,
    9,
    10,
    11,
    12,
    13,
  ];
  useEffect(() => {
    if (param.groupid == '10') setOver(true);
  }, []);

  return (
    <div className="page">
      <div
        className="main_content"
        style={style}
        onClick={(e: any) => {
          if (e.target.className != 'agent_list_element') setNumber(-1);
        }}
      >
        <p id="name_agency">{over ? '이미 종료된 미션입니다' : 'DDay'}</p>
        <NoticeLine
          style={{ marginBottom: 0 }}
          content="이 조직은 곧 자동으로 해체됩니다"
        ></NoticeLine>
        <div id="agent_list">
          {memberlist.map((elem, index) => {
            return (
              <input
                type="button"
                key={index}
                onClick={() => {
                  setNumber(index);
                }}
                className="agent_list_element"
                value={index % 2 == 0 ? elem : elem + 'sdjlakjdlkajsdlkajsdkj'}
              ></input>
            );
          })}
        </div>
        <div id="mission_content">
          {number != -1
            ? content[number]
            : '왼쪽의 버튼을 클릭해 다른 요원의 미션을 확인해보세요'}
        </div>
      </div>
      <MenuBar />
    </div>
  );
}

export default Mission;
