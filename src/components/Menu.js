import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import ListIcon from '@mui/icons-material/List';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router';

export const Menu = () => {
  const router = useRouter();
  const [value, setValue] = React.useState(router.pathname.slice(1));
  React.useEffect(() => {
    router.prefetch('/');
    router.prefetch('/myfile.html');
    router.prefetch('/ARmarker');
    router.prefetch('/edit');
  }, []);

  const handleChange = (event, newValue) => {
    let url = window.location.href;
    let index = url.length - 1;
    setValue(newValue);
    if ('1' <= url[index] && url[index] <= '7')
      router.push(`${newValue}` + '?' + url[index]);
    else router.push(`${newValue}`);
  };

  return (
    <>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%' }}
        elevation={3}
        component="nav"
      >
        <BottomNavigation showLabels value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="友達一覧"
            value="/"
            icon={<ListIcon />}
          />
          <BottomNavigationAction
            label="読み取り"
            value="myfile.html"
            icon={<PhotoCameraIcon />}
          />
          <BottomNavigationAction
            label="マーカー"
            value="ARmarker"
            icon={<QrCode2Icon />}
          />
          <BottomNavigationAction
            label="編集"
            value="edit"
            icon={<EditIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};
