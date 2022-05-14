import React, { CSSProperties, useState } from 'react';
import { Stack } from 'react-bootstrap';
// import ReactTooltip from 'react-tooltip';
import Button from '../Component/Button';
import InputBox from '../Component/InputBox';
import './InvitedInfoModule.css';

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

function createTagItem(id: any, value: string, onClick: (e: any) => void) {
  return (
    <div key={id} className="tag-item">
      <span className="tag-item-text">{value}</span>
      <input
        className="tag-item-button"
        onClick={onClick}
        type="button"
        value="X"
      ></input>
    </div>
  );
}

function addItem(
  email: string,
  emailList: string[],
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setEmailList: React.Dispatch<React.SetStateAction<string[]>>,
): boolean {
  try {
    const regex = new RegExp(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    if (regex.test(email) == false) {
      console.log('invaild');
      return false;
    }
    if (emailList.findIndex((value) => value == email) == -1) {
      const updatedList = [...emailList];
      updatedList.push(email);
      setEmailList(updatedList);
      setEmail('');
      return true;
    }
  } catch (e) {
    console.log('error');
    return false;
  }
  return true;
}

type InvitedInfoModuleProps = {
  setter: React.Dispatch<React.SetStateAction<number>>;
  style?: CSSProperties;
};
function InvitedInfoModule(props: InvitedInfoModuleProps) {
  // const tip = '초대할 요원의 이메일을 입력해주세요';
  // const [ttInvite, showTTInvite] = useState(true);
  const [email, setEmail] = useState('');
  const [emailList, setEmailList] = useState<Array<string>>([]);

  return (
    <div className="page" id="nodule-invited-info" style={props.style}>
      {/* {ttInvite && <ReactTooltip id="tooltipInvite"></ReactTooltip>} */}

      <Stack>
        <p id="ca_welcom_message">요원님 안녕하세요</p>
        <p>조직에 초대할 요원의 이메일을 추가해주세요</p>
        <p id="ca_warning">생성 이후에는 변경이 어려우니 신중히 결정해주세요</p>
      </Stack>
      <div id="whole" style={{ height: '190px' }}>
        <div id="tag-box">
          {emailList.map((value: string, index: number) => {
            return createTagItem(index, value, (e) => {
              e.preventDefault();
              const deleteTagItem = e.target.parentElement.firstChild.innerText;
              const filteredTagList = emailList.filter(
                (tagItem) => tagItem !== deleteTagItem,
              );
              setEmailList(filteredTagList);
            });
          })}
        </div>
      </div>
      <Stack direction="horizontal" gap={3} style={{ marginBottom: '20px' }}>
        <InputBox
          style={{ width: '80%' }}
          data-for="tooltipInvite"
          // data-tip={tip}
          placeholder="이메일을 입력해주세요"
          onMouseEnter={() => {
            // handleMouseEnter(showTTInvite);
          }}
          onMouseLeave={() => {
            // handleMouseLeave(showTTInvite);
          }}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setEmail(target.value);
          }}
          onKeyPress={(e: any) => {
            if (e.key !== 'Enter') return;
            if (!addItem(email, emailList, setEmail, setEmailList)) return;
            e.target.value = '';
            e.target.focus();
            // showTTInvite(false);
          }}
        ></InputBox>
        <Button
          style={{ width: '20%' }}
          kind="fill"
          value="추가"
          onClick={(e: any) => {
            if (!addItem(email, emailList, setEmail, setEmailList)) return;
            e.target.parentElement.firstChild.value = '';
            e.target.blur();
            e.target.parentElement.firstChild.focus();
            // showTTInvite(false);
          }}
        ></Button>
      </Stack>
      <Stack direction="horizontal" gap={3}>
        <Button
          kind="none"
          value="이전으로"
          onClick={() => {
            props.setter(0);
          }}
        ></Button>
        <Button
          kind="fill"
          value="다음으로"
          onClick={() => {
            props.setter(2);
          }}
        ></Button>
      </Stack>
    </div>
  );
}

export default InvitedInfoModule;
