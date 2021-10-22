import React, { useState } from "react"
import { Main, ModalMain } from "./Image.styled"
import { Modal } from "../index"

const Image = (props) => {
  const { img, delay, width } = props
  const [openModal, setOpenModal] = useState(false)
  const [openImg, setOpenImg] = useState(true)
  const [imgLoad, setImgLoad] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
    setOpenImg(true)
  }

  const handleCloseModal = () => {
    setOpenImg(false)
    setTimeout(() => {
      setOpenModal(false)
    }, 200)
  }

  return (
    <React.Fragment>
      <Main
        width={width}
        delay={delay !== undefined ? delay : 0}
        onClick={() => handleOpenModal()}
        imgLoad={imgLoad}
      >
        <div className="card">
          {/* Border divs*/}
          <div className="border1"></div>
          <div className="border2"></div>

          <div className="image">
            <h3>Cargando...{imgLoad}</h3>
            <img
              src={`${img}`}
              alt="imagen"
              onLoad={() => setImgLoad(true)}
            />
          </div>
        </div>
      </Main>
      {
        openModal && <Modal open={openModal}>
          <ModalMain openImg={openImg} onClick={() => handleCloseModal()}>
            <div className="overlay"></div>
            <img src={`${img}`} className="image" alt="imagen" />
          </ModalMain>
        </Modal>
      }
    </React.Fragment>
  )
}

export default Image