import { Box, Container, Fade, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { IKnowledgeItem } from '../../interfaces/knowledge-item';
import KnowledgeCenterService from '../../services/KnowledgeCenter.service';
import './KnowledgeContent.scss';

interface KnowledgeContentProps {
  dataId: number
}

const KnowledgeContent: FC<KnowledgeContentProps> = ({ dataId }) => {
  const [data, setData] = useState<IKnowledgeItem | undefined>(undefined);
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    setOpen(false);
    setTimeout(() => {
      setData(KnowledgeCenterService.getSectionData(dataId));
      setOpen(true)
    }, 200);
  }, [dataId]);

  return (
    <Fade in={open} timeout={{ enter: 500, exit: 200 }}>
      <Box display={'flex'} flexDirection={'column'}>
        <Typography variant="h3" component="div" sx={{ alignSelf: 'center' }}>
          {data?.title}
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ alignSelf: 'center' }}
          gutterBottom
        >
          {data?.subTitle}
        </Typography>
        <Typography variant="body1" component="div">
          {data?.content}
        </Typography>
      </Box>
    </Fade>
  )
}

export default KnowledgeContent;
