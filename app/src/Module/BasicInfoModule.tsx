import React, { CSSProperties, useState } from 'react';
import { Stack } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import Button from '../Component/Button';
import DateBox from '../Component/DateBox';
import InputBox from '../Component/InputBox';

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
};

type BasicInfoModuleProps = {
  setter: React.Dispatch<React.SetStateAction<number>>;
  style?: CSSProperties;
};
function BasicInfoModule(props: BasicInfoModuleProps) {
  const [ttName, showTTName] = useState(true);
  const [ttBudget, showTTBudget] = useState(true);
  const [ttDue, showTTDue] = useState(true);
  const [ttCode, showTTCode] = useState(true);

  return (
    <div className="page" id="nodule-basic-info" style={props.style}>
      {ttName && <ReactTooltip id="tooltipName"></ReactTooltip>}
      {ttBudget && <ReactTooltip id="tooltipBudget"></ReactTooltip>}
      {ttDue && <ReactTooltip id="tooltipDue"></ReactTooltip>}
      {ttCode && <ReactTooltip id="tooltipCode"></ReactTooltip>}

      <Stack>
        <p id="ca_welcom_message">요원님 안녕하세요</p>
        <p>새로운 조직을 창설하기 위해 다음의 정보가 필요합니다</p>
        <p id="ca_warning">생성 이후에는 변경이 어려우니 신중히 결정해주세요</p>
      </Stack>
      <Stack gap={2} style={{ marginBottom: '20px' }}>
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
      </Stack>
      <Stack direction="horizontal" gap={3}>
        <Button kind="none" value="뒤로가기"></Button>
        <Button
          kind="fill"
          value="다음으로"
          onClick={() => {
            props.setter(1);
          }}
        ></Button>
      </Stack>
    </div>
  );
}

export default BasicInfoModule;
