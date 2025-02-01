import { Container, Form, Avatar } from "./style";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useAuth} from "../../hooks/auth"

export function Profile() {
  const {user} = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()



  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/mviniciussb.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" icon={FiUser} type="text" value={name} onChange={e => setName(e.target.value)} />
        <Input placeholder="E-mail" icon={FiMail} type="text" value={email} onChange={e => setEmail(e.target.value)} />

        <Input placeholder="Senha atual" icon={FiLock} type="password" onChange={e => setPasswordOld(e.target.value)} />
        <Input placeholder="Nova senha" icon={FiLock} type="password" onChange={e => setPasswordNew(e.target.value)} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
