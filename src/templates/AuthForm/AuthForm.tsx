import React, { FC, useRef, useState } from 'react';
import { Button, Col, Container, Image, Row, Spinner } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import style from './AuthForm.module.scss';
import logo from '../../assets/images/logo_inm.png';

const FORM_TITLE = 'Intelligent network monitoring';

interface IAuthData {
  username: string;
  password: string;
  remember?: boolean;
}

export const AuthForm: FC = () => {
  const inputRefLogin = useRef<HTMLInputElement>(null);
  const inputRefPassword = useRef<HTMLInputElement>(null);
  const [isDataSend, setDataSend] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const authData: IAuthData = {
      username: inputRefLogin.current?.value || '',
      password: inputRefPassword.current?.value || '',
      remember: rememberMe ? true : undefined,
    };

    try {
      setDataSend(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(authData);
    } catch (error) {
      console.log(error);
    } finally {
      setDataSend(false);
    }
  };

  return (
    <Container
      fluid
      className={`d-flex flex-column justify-content-center align-items-center ${style.container}`}
    >
      <Form noValidate onSubmit={handleSubmit} className={`border rounded p-3 ${style.form}`}>
        <Row className="border-bottom">
          <span className="h6 mb-3">
            <Image src={logo} alt="logo_inm" width={30} />
            &nbsp;
            {FORM_TITLE}
          </span>
        </Row>
        <Row className="p-0 ps-3 pt-3">
          <Form.Group as={Row} className={`${style.line} mb-2 d-flex align-items-baseline`}>
            <Form.Label column sm="4">
              Имя пользователя
            </Form.Label>
            <Col sm="8" className="d-flex flex-column align-items-center justify-content-start">
              <Form.Control required type="text" ref={inputRefLogin} size="sm" />
              <Form.Control.Feedback type="invalid">
                Пожалуйста, введите имя пользователя.
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className={`d-flex align-items-baseline`}>
            <Form.Label column sm="4">
              Пароль
            </Form.Label>
            <Col sm="8" className="d-flex flex-column align-items-center justify-content-start">
              <Form.Control required type="password" ref={inputRefPassword} size="sm" />
              <Form.Control.Feedback type="invalid">
                Пожалуйста, введите пароль.
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className={`${style.line} mb-2`}>
            <Col sm="8"></Col>
            <Col
              sm="4"
              style={{ height: '64px' }}
              className="d-flex align-items-center text-nowrap"
            >
              <Form.Check
                type="checkbox"
                label="Запомнить меня"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            </Col>
          </Form.Group>
        </Row>
        <Row className="border-top pt-3">
          <Col className="d-flex align-items-center justify-content-end flex-nowrap">
            <div className="nav nav-link" style={{ cursor: 'pointer' }}>
              Забыли пароль?
            </div>
            <Button className="px-3" variant="primary" type="submit" disabled={isDataSend}>
              Войти&nbsp;
              <Spinner animation="border" size="sm" hidden={!isDataSend} />
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
