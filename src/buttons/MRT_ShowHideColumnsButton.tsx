import React, { FC, MouseEvent, useState } from 'react';
import { IconButton, Menu, Tooltip } from '@mui/material';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import { useMRT } from '../useMRT';
import { MRT_ShowHideColumnsMenu } from '../menus/MRT_ShowHideColumnsMenu';

interface Props {}

export const MRT_ShowHideColumnsButton: FC<Props> = () => {
  const { tableInstance, localization } = useMRT();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Tooltip arrow title={localization?.showHideColumnsButtonTitle ?? ''}>
        <IconButton
          aria-label={localization?.showHideColumnsButtonTitle}
          onClick={handleClick}
          size="small"
        >
          <ViewColumnIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        {tableInstance.columns.map((column, index) => (
          <MRT_ShowHideColumnsMenu
            key={`${index}-${column.id}`}
            column={column}
          />
        ))}
      </Menu>
    </>
  );
};
