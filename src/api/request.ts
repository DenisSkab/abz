import { NewUser } from '../utils/types';

export const getToken = async () => {
  const token = await fetch(
    'https://frontend-test-assignment-api.abz.agency/api/v1/token'
  );

  return token.json();
};

const token = getToken().then((res) => res.token);

export const getUsers = async (count: number) => {
  try {
    const res = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error('Ошибка при выполнении запроса');
    }

    const data = await res.json();
    return data.users;
  } catch (error) {
    console.error('Ошибка:', error);
    throw error;
  }
};

export const postUser = async (token: string, user: NewUser) => {
  try {
    const formData = new FormData();

    formData.append('name', user.name);
    formData.append('email', user.email);
    formData.append('phone', user.phone);
    formData.append('position_id', user.position);
    formData.append('photo', user.photo);

    const response = await fetch(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users',
      {
        method: 'POST',
        headers: {
          Token: token,
        },
        body: formData,
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log(data);
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
