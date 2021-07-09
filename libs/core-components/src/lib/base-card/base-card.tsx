import React from 'react';

import './base-card.module.scss';

import {
  Button,
  Card,
  CardActions,
  CardContent, Collapse, createStyles,
  Divider, makeStyles, Theme, Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    leftButton: {
      marginLeft: 'auto',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  }),
);

/* eslint-disable-next-line */
export interface BaseCardProps {
  content: React.ReactNode;
  collapsedContent: React.ReactNode;
  children?: React.ReactNode;
}

export function BaseCard({ content, collapsedContent, children }: BaseCardProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} elevation={4}>
      <CardContent>
        { content }
      </CardContent>
      <CardActions disableSpacing>
        <Button
          className={classes.leftButton}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          endIcon={<ExpandMoreIcon className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })} />}
        >
          Learn more
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent>
          { collapsedContent }
          {children ?
            <>
              <Divider />
              <Typography variant="h6">More info</Typography>
              { children }
            </>
            : null
          }
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default BaseCard;
