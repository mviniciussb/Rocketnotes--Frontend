import { Container, Form, Avatar } from "./style";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../service/api";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    await updateProfile({ user, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          icon={FiUser}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          icon={FiMail}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          icon={FiLock}
          type="password"
          onChange={(e) => setPasswordOld(e.target.value)}
        />
        <Input
          placeholder="Nova senha"
          icon={FiLock}
          type="password"
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
