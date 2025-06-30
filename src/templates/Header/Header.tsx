import React, { FC } from 'react';
import style from './Header.module.scss';
import { Row, Col, Container, Image, NavDropdown } from 'react-bootstrap';
import { DoorOpen } from 'react-bootstrap-icons';
import logo from '../../assets/images/logo_ertelecom.svg';
import avatar from '../../assets/images/blank_avatar.jpg';

export const Header: FC = () => {
  // Отформатированные данные пользователя, пришедшие с сервера
  const userData = {
    name: 'Евгений',
    surname: 'Болотов',
    patronymic: 'Сергеевич',
    email: 'evgenii.s.bolotov@dom.ru',
    avatar: avatar,
  };

  // Для форматирования инициалов в случае отсутствия данных
  function formateDataInitials(param: string) {
    // Если данные есть
    if (param !== '-') {
      return param[0] + '.';
    }
    // Если данных нет
    return '';
  }

  return (
    <header className="p-1" style={{ backgroundColor: '#F6F6F6' }}>
      <Container fluid>
        <Row className="row d-flex align-items-center justify-content-center flex-nowrap">
          <Col className="p-0 col-2 d-flex align-items-center justify-content-start">
            <Image src={logo} className={style.logo} alt="logo" style={{ cursor: 'pointer' }} />
          </Col>

          <Col className="col d-flex align-items-center p-0">
            {' '}
            <div className="d-flex justify-content-center align-items-center gap-3">
              <NavDropdown className="d-flex justify-content-center" title="Мониторинг">
                <NavDropdown.Item href="#home">Мониторинг</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="d-flex justify-content-center" title="Автодискаверинг">
                <NavDropdown.Item href="#home">Автодискаверинг</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Col>

          <Col className="col col-2">
            <Row className="row d-flex  align-items-center">
              <Col className="col d-flex flex-row justify-content-end p-0">
                <div className="d-flex align-items-center">
                  <div className="d-flex  justify-content-end text-muted">
                    <span>{userData.surname}&nbsp;</span>
                    <span className="d-flex">
                      {formateDataInitials(userData.name)}
                      &nbsp;
                      {formateDataInitials(userData.patronymic)}
                    </span>
                  </div>
                  <div className="d-flex justify-content-end p-0 ms-1">
                    <NavDropdown
                      title={
                        <div className={` d-flex justify-content-center`}>
                          <Image
                            src={userData.avatar}
                            alt="Аватар пользователя"
                            style={{
                              borderRadius: '50%',
                              objectFit: 'cover',
                            }}
                            className={`border border-3 align-self-center ${style.avatar}`}
                          />
                        </div>
                      }
                      id="basic-nav-dropdown"
                      className={style.dropdownToggle}
                    >
                      <Container>
                        <Row className="border-bottom m-1 text-left">
                          <Col>
                            <span>{userData.surname}</span>
                            <br />
                            <span>{userData.name}</span>
                            <br />
                            <span>{userData.patronymic}</span>
                            <br />
                            <span className="text-muted">{userData.email}</span>
                          </Col>
                        </Row>
                        <Row>
                          <NavDropdown.Item>
                            <span className="nav-link d-flex align-items-center" onClick={() => {}}>
                              <DoorOpen color="gray" size={20} className="me-2" />
                              Выйти
                            </span>
                          </NavDropdown.Item>
                        </Row>
                      </Container>
                    </NavDropdown>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
