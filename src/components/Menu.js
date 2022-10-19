import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListIcon from '@mui/icons-material/List';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import EditIcon from '@mui/icons-material/Edit';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

export const Menu = () => {
  const router = useRouter();
  const [value, setValue] = React.useState(router.pathname.slice(1));
  React.useEffect(() => {
    router.prefetch('/');
    router.prefetch('/camera');
    router.prefetch('/ARmarker');
    router.prefetch('/edit');
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // setTimeout(() => {
      router.push(`${newValue}`);
    // }, 0);
  };

  return (
    <BottomNavigation
      showLabels
      css={cssBottomNavigation}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="友達一覧"
        value="/"
        icon={<ListIcon />}
      />
      <BottomNavigationAction
        label="読み取り"
        value="camera"
        icon={<PhotoCameraIcon />}
      />
      <BottomNavigationAction
        label="マーカー"
        value="ARmarker"
        icon={<QrCode2Icon />}
      />
      <BottomNavigationAction label="編集" value="edit" icon={<EditIcon />} />
    </BottomNavigation>
  );
};

const cssBottomNavigation = css`
  width: 100%;
  margin: 0 auto;
  position: fixed;
  bottom: 0px;
`;
