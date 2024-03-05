import { ChangeEvent, FormEvent, useState } from 'react';

import { getToken, postUser } from '../../../api/request';

import Radio from './radio';
import Field from './field';
import Button from '../../button';

import style from './form.module.scss';
import { NewUser } from '../../../utils/types';

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const Form = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    position: '1',
    photo: null,
  });
  const [formatError, setFormatError] = useState(false);

  const handleRadioChange = (value: string) => {
    setUser({ ...user, position: value });
  };

  const handlerChangeName = (value: string) =>
    setUser({ ...user, name: value });

  const handlerChangeEmail = (value: string) =>
    setUser({ ...user, email: value });

  const handlerChangePhone = (value: string) =>
    setUser({ ...user, phone: value });

  const validateFileType = (file: File) => {
    const allowedTypes = ['image/jpeg', 'image/jpg'];
    return allowedTypes.includes(file.type);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!validateFileType(file)) {
        alert(
          'Invalid file type. Please select a file with the extension .jpg, .jpeg'
        );
        event.target.value = '';
      } else if (file.size > MAX_FILE_SIZE) {
        alert(
          `The file is too large. Maximum file size - ${
            MAX_FILE_SIZE / (1024 * 1024)
          } MB.`
        );
        event.target.value = '';
      } else {
        setUser({ ...user, photo: file as any });
      }
    }
  };

  const addUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getToken().then((res) => postUser(res.token, user));
  };

  const isObjectValuesNotEmpty = (obj: NewUser) => {
    return Object.values(obj).every((value: any) => {
      return value !== '';
    });
  };

  return (
    <form className={style.form} onSubmit={addUser}>
      <Field
        placeholder='Your name'
        value={user.name}
        onChange={handlerChangeName}
        setFormatError={setFormatError}
        type='text'
      />
      <Field
        placeholder='Email'
        value={user.email}
        onChange={handlerChangeEmail}
        setFormatError={setFormatError}
        type='email'
      />
      <Field
        placeholder='Phone'
        value={user.phone}
        onChange={handlerChangePhone}
        setFormatError={setFormatError}
        type='tel'
      />
      <div className={style.position}>
        <h2 className={style.positionTitle}>Select your position</h2>
        <Radio
          id='1'
          handleRadioChange={handleRadioChange}
          checked={user.position}
          title='Frontend developer'
        />
        <Radio
          id='2'
          handleRadioChange={handleRadioChange}
          checked={user.position}
          title='Backend developer'
        />
        <Radio
          id='3'
          handleRadioChange={handleRadioChange}
          checked={user.position}
          title='Designer'
        />
        <Radio
          id='4'
          handleRadioChange={handleRadioChange}
          checked={user.position}
          title='QA'
        />
      </div>
      <label htmlFor='file-upload' className={style.customFile}>
        <div className={style.customFileButton}>Upload</div>
        <p className={style.customFileText}>Upload your photo</p>
      </label>
      <input
        type='file'
        id='file-upload'
        className={style.file}
        onChange={handleFileChange}
      />
      <div className={style.wrapperButton}>
        <Button
          text='Sing up'
          disabled={!isObjectValuesNotEmpty(user) || formatError}
          type='submit'
        />
      </div>
    </form>
  );
};

export default Form;
