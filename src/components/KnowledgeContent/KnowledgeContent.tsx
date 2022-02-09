import { Box, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { IKnowledgeItem } from '../../interfaces/knowledge-item';
import KnowledgeCenterService from '../../services/KnowledgeCenterService';
import './KnowledgeContent.scss';

interface KnowledgeContentProps {
  dataId: number
}

const KnowledgeContent: FC<KnowledgeContentProps> = ({dataId}) => {
  const [data, setData] = useState<IKnowledgeItem | undefined>(undefined);
  useEffect(() => {
    setData(KnowledgeCenterService.getSectionData(dataId));
  }, [dataId]);
  
  return (
    <>    
    <Box display={'flex'} flexDirection={'column'}>
      <Typography variant="h3" component="div" sx={{alignSelf: 'center'}}>
        {data?.title}
      </Typography>
      <Typography 
        variant="subtitle1" 
        component="div" 
        sx={{alignSelf: 'center'}} 
        gutterBottom
      >
        {data?.subTitle}
      </Typography>
      <Typography variant="body1" component="div">
        {data?.content}
      </Typography>       
    </Box>
    </>
  )
}

export default KnowledgeContent;
