import React, { CSSProperties, useState } from 'react';
import { Stack } from 'react-bootstrap';
import Button from '../Component/Button';
import InputBox from '../Component/InputBox';
// import ReactTooltip from 'react-tooltip';
import DateBox from '../Component/DateBox';
import './CreateAgency.css';
import ReactTooltip from 'react-tooltip';

const x = Math.max(window.innerWidth * 0.7, 300);
const imgWidth = Math.max(window.innerWidth * 0.5, 550);
const newW = (window.innerWidth - x) / 2 + 'px';
const newH = (window.innerHeight - imgWidth) / 2 + 'px';

const style: CSSProperties = {
  width: '100%',
  position: 'fixed',
  paddingTop: newH,
  paddingLeft: newW,
  paddingBottom: newH,
  paddingRight: newW,
  zIndex: 2,
  transition: '500ms',
  opacity: 1,
};

function handleMouseEnter(
  setter: React.Dispatch<React.SetStateAction<boolean>>,
) {
  setter(true);
}

function handleMouseLeave(
  setter: React.Dispatch<React.SetStateAction<boolean>>,
) {
  setter(false);
  setTimeout(() => setter(true), 50);
}

const tips = {
  tooltipName: '생성할 조직의 이름을 입력해주세요',
  tooltipBudget: '선물의 금액을 입력해주세요',
  tooltipDue: '이벤트 날짜를 입력해주세요',
  tooltipCode: '조직 안에서 사용할 코드네임을 입력해주세요',
  tooltipInvite: '초대할 요원의 이메일을 입력해주세요',
};
function CreateAgency() {
  const [ttName, showTTName] = useState(true);
  const [ttBudget, showTTBudget] = useState(true);
  const [ttDue, showTTDue] = useState(true);
  const [ttCode, showTTCode] = useState(true);
  const [ttInvite, showTTInvite] = useState(true);
  return (
    <div className="page">
      <div style={style}>
        {ttName && <ReactTooltip id="tooltipName"></ReactTooltip>}
        {ttBudget && <ReactTooltip id="tooltipBudget"></ReactTooltip>}
        {ttDue && <ReactTooltip id="tooltipDue"></ReactTooltip>}
        {ttCode && <ReactTooltip id="tooltipCode"></ReactTooltip>}
        {ttInvite && <ReactTooltip id="tooltipInvite"></ReactTooltip>}
        <Stack>
          <p id="ca_welcom_message">요원님 안녕하세요</p>
          <p>새로운 조직을 창설하기 위해 다음의 정보가 필요합니다</p>
          <p id="ca_warning">
            생성 이후에는 변경이 어려우니 신중히 결정해주세요
          </p>
        </Stack>
        <Stack gap={2}>
          <InputBox
            data-for="tooltipName"
            data-tip={tips.tooltipName}
            placeholder="조직이름"
            onMouseEnter={() => {
              handleMouseEnter(showTTName);
            }}
            onMouseLeave={() => {
              handleMouseLeave(showTTName);
            }}
          ></InputBox>
          <InputBox
            data-for="tooltipBudget"
            data-tip={tips.tooltipBudget}
            placeholder="예산액"
            onMouseEnter={() => {
              handleMouseEnter(showTTBudget);
            }}
            onMouseLeave={() => {
              handleMouseLeave(showTTBudget);
            }}
          ></InputBox>
          {/* <InputBox placeholder="날짜"></InputBox> */}
          <DateBox
            data-for="tooltipDue"
            data-tip={tips.tooltipDue}
            style={{ width: '100%' }}
            min="2022-05-13"
            max="2022-08-12"
            onMouseEnter={() => {
              handleMouseEnter(showTTDue);
            }}
            onMouseLeave={() => {
              handleMouseLeave(showTTDue);
            }}
          ></DateBox>
          <InputBox
            data-for="tooltipCode"
            data-tip={tips.tooltipCode}
            placeholder="코드네임"
            onMouseEnter={() => {
              handleMouseEnter(showTTCode);
            }}
            onMouseLeave={() => {
              handleMouseLeave(showTTCode);
            }}
          ></InputBox>
          <InputBox
            data-for="tooltipInvite"
            data-tip={tips.tooltipInvite}
            placeholder="요원"
            onMouseEnter={() => {
              handleMouseEnter(showTTInvite);
            }}
            onMouseLeave={() => {
              handleMouseLeave(showTTInvite);
            }}
          ></InputBox>
        </Stack>
        <Stack direction="horizontal" gap={2}>
          <Button kind="none" value="뒤로가기"></Button>
          <Button kind="fill" value="창설하기"></Button>
        </Stack>
      </div>
    </div>
  );
}

export default CreateAgency;
