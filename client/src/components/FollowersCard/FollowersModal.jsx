import React from 'react'
import { Modal, useMantineTheme } from "@mantine/core";
import FollowersCard from './FollowersCard';

const FollowersModal = ({ toggleModal, setToggleModal }) => {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={toggleModal}
      onClose={() => setToggleModal(false)}
    >
      <FollowersCard location='modal' />
    </Modal>
  )
}

export default FollowersModal