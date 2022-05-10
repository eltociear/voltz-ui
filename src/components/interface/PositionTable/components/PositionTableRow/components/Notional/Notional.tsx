import TableCell from '@mui/material/TableCell';

import { Typography } from '@components/atomic';
import { Button } from '@components/atomic';
import { isUndefined } from 'lodash';
export type NotionalProps = {
    notional?: string;
    displayEditButton?: boolean;
    token: string;
    onSelect?: () => void;
  };


const Notional: React.FunctionComponent<NotionalProps> = ({ notional, token, onSelect}) => {

      const renderNotionalAmount = () => {
        if (isUndefined(notional)) {
          return 'No data';
        }
        return `${notional} ${token}`;
      };

      return (
        <TableCell>
          <Typography variant="body2" label="Notional" sx={{ fontSize: 18 }}>
            {renderNotionalAmount()}
          </Typography>
    
          {!isUndefined(onSelect) && (<Button sx={{
              display: "flex",
              paddingTop: (theme) => theme.spacing(0),
              paddingBottom: (theme) => theme.spacing(0),
              paddingLeft: (theme) => theme.spacing(0),
              paddingRight: (theme) => theme.spacing(0),
              borderStyle: "solid",
              borderColor: "#5C0026",
              borderRadius: 1,
              flex: "none",
              width: "100%",
              background: "transparent",
              color: "#FF4AA9",
              '&:hover': {
                borderColor: '#FF4AA9',
                background: "transparent",
              },
            }} onClick={onSelect}> 
                Edit
            </Button>)}
    
    
        </TableCell>
      );
};
    
    export default Notional;
