import { ReactComponent as LibraryIcon } from '~/assets/icons/library.svg';
import { ReactComponent as PlusIcon } from '~/assets/icons/plus.svg';

import styles from './Library.module.scss';
import { Playlists } from './Playlists/Playlists';
import { Button } from '../../../shared/ui/Button/Button';

export const Library = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className={styles.container}>
      <div className={styles.library}>
        <Button
          className={styles.library_btn}
          icon={<LibraryIcon />}
          onClick={onClick}
        >
          Your Library
        </Button>
        <Button icon={<PlusIcon />} />
      </div>
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
      <Playlists />
    </div>
  );
};
