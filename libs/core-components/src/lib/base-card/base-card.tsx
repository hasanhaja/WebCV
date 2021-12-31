import React from 'react';

import {
  Button,
  Card,
  CardActions,
  CardContent, Collapse, Divider, styled
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledCard = styled(Card)`
  max-width: ${41*8}px;
  min-width: ${41*8}px;
`;

const ExpandButton = styled(Button)`
  margin: auto;
`;

// TODO animation for expand
const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  transform: rotate(0deg);
  transition: transform 20ms;
`;

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     // root: {
//     //   maxWidth: theme.spacing(41),
//     //   minWidth: theme.spacing(41),
//     // },
//     leftButton: {
//       marginLeft: 'auto',
//     },
//     expand: {
//       transform: 'rotate(0deg)',
//       transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//       }),
//     },
//     expandOpen: {
//       transform: 'rotate(180deg)',
//     },
//     large: {
//       width: theme.spacing(10),
//       height: theme.spacing(10),
//     },
//   }),
// );

/* eslint-disable-next-line */
export interface BaseCardProps {
  content: React.ReactNode;
  collapsedContent: React.ReactNode;
  children?: React.ReactNode;
}

export function BaseCard({ content, collapsedContent, children }: BaseCardProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(prevExpanded => !prevExpanded);
  };

  const buttonText = expanded ? "Hide" : "Learn more";

  return (
    <StyledCard elevation={4}>
      <CardContent>
        { content }
      </CardContent>
      <CardActions disableSpacing>
        <ExpandButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          endIcon={<ExpandMoreIcon />}
        >
          { buttonText }
        </ExpandButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent>
          { collapsedContent }
          {children ?
            <>
              <Divider />
              { children }
            </>
            : null
          }
        </CardContent>
      </Collapse>
    </StyledCard>
  );
}

export default BaseCard;
