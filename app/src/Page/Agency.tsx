import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../Component/Modal';
import AgencyAfterModule from '../Module/AgencyAfterModule';
import AgencyBeforeModule from '../Module/AgencyBeforeModule';
import MissionModule from '../Module/MissionModule';

import './CSS/Agency.css';

function Agency() {
  const params = useParams();
  const [dday, setDday] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (params.groupid == '1') setDday(true);
    else if (params.groupid == '2') setDday(true);
    else if (params.groupid == '10') setDday(true);
    else if (params.groupid == '11') setDday(true);
    if (params.groupid == '10') setOpen(true);
    else if (params.groupid == '11') setOpen(true);
  }, []);
  const [msModalIsOpn, setMsModalOpen] = useState(false);
  function handleMsModalClose() {
    setMsModalOpen(false);
  }
  function handleMsModalOpen() {
    setMsModalOpen(true);
  }
  if (!dday) {
    return (
      <div>
        {msModalIsOpn ? <Modal handleClose={handleMsModalClose}></Modal> : null}
        <AgencyBeforeModule handleOpen={handleMsModalOpen}></AgencyBeforeModule>
        ;
      </div>
    );
  } else if (!open) return <AgencyAfterModule></AgencyAfterModule>;

  return <MissionModule></MissionModule>;
}

export default Agency;
