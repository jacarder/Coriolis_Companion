import { Alert, Card, CardContent, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { IIcon } from '../../interfaces/icon';
import IconsService from '../../services/Icons.service';
import './IconInfoCard.scss';

interface IconInfoCardProps {
  iconId: number | null | undefined
}

const IconInfoCard: FC<IconInfoCardProps> = ({ iconId }) => {
  const [icon, setIcon] = useState<IIcon>();
  useEffect(() => {
    if (iconId != null) {
      setIcon(IconsService.getIconData(iconId));
    }
  }, [iconId])

  return (
    <Card>
      {
        iconId == null ? <Alert severity='error'>Icon not found</Alert> :
          <CardContent>
            <Typography variant='h5' color="text.secondary" gutterBottom>
              {icon?.name}
            </Typography>
            <Typography component={'span'} variant="body2">
              <div>
                <b>Other Names:</b>
                <ul>
                  {icon?.otherNames.map((name, index) => <li key={`${name}-${index}`}>{name}</li>)}
                </ul>
              </div>
              <div><b>Description:</b> <div>{icon?.description}</div></div>
            </Typography>
          </CardContent>
      }
    </Card>
  )
};

export default IconInfoCard;
